import { useCallback, useEffect, useState } from "react";
import doWeHaveToken from "../functions/checkIfAutorized";
import Footer from "../pageElements/footer";
import Header from "../pageElements/header";
import Service from "../service/service";
import ReactLoading from "react-loading";
import Candidate from "./candidate";

export default function Admin() {
  const [ApplicationList, setApplicationList] = useState();
  const getApplications = useCallback(async () => {
    const requestToApplicationList = await Service("applicationList");

    setApplicationList(requestToApplicationList);
  }, []);
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
              {ApplicationList ? (
                ApplicationList.map((elem) => {
                  return <Candidate candidate={elem} />;
                })
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
