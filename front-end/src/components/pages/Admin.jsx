import doWeHaveToken from "../functions/checkIfAutorized";
import Footer from "../pageElements/footer";
import Header from "../pageElements/header";

export default function Admin() {
  if (doWeHaveToken()) {
    return (
      <>
        <Header />
        <Footer />
      </>
    );
  }
  return <div className="NotAuth">You not authorized</div>;
}
