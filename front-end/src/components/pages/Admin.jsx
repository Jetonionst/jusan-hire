import { useCallback, useEffect, useState } from "react";
import doWeHaveToken from "../functions/checkIfAutorized";
import Footer from "../pageElements/footer";
import Header from "../pageElements/header";
import Service from "../service/service";
import ReactLoading from "react-loading";
import Candidate from "./candidate";
import TablePagination from "@mui/material/TablePagination";

export default function Admin() {
  const [ApplicationList, setApplicationList] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const getApplications = useCallback(async () => {
    const requestToApplicationList = await Service("applicationList");
    const reversedApplist = requestToApplicationList.reverse();

    setApplicationList(reversedApplist);
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    getApplications();
  }, [getApplications]);
  if (doWeHaveToken()) {
    return (
      <>
        <Header />
        <div className="adminPage">
          <div className="adminPanel">
            <div className="adminPanelHeader">
              <h2>Список заявок</h2>
              <div>searc</div>
            </div>
            <div className="adminPanelBody">
              <TablePagination
                component="div"
                count={ApplicationList ? ApplicationList.length : 0}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              {ApplicationList ? (
                <>
                  {ApplicationList.map((elem, index) => {
                    if (
                      index > page * rowsPerPage &&
                      index < rowsPerPage * (page + 1)
                    ) {
                      return (
                        <Candidate candidate={elem} key={(elem = index)} />
                      );
                    }
                  })}
                </>
              ) : (
                <ReactLoading color="orange" className="loader" />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return <div className="NotAuth">You not authorized</div>;
}
