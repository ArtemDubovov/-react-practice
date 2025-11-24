import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function WrapperPage({pageComponent}) {
    return (
        <>
            <Header />
            {pageComponent}
            <Footer />
        </>
    )
}

export default WrapperPage;