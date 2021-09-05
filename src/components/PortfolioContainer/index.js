import React, { useState } from "react";
import NavTabs from "../elements/NavTabs";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import "./index.css";

function PortfolioContainer() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          {/* Pass the state value and the setter as props to NavTabs */}
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {/* Call the renderPage function passing in the currentPage */}
          <div>{renderPage(currentPage)}</div>
        </div>
        <Footer />
        {/* <HeaderWithImage/> */}
      </div>
    </>
  );
}

export default PortfolioContainer;
