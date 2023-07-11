import React from 'react';
import HeadInfo from "./HeadInfo/HeadInfo";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main(props) {
    return (
        <>
            <main className="content">
                <HeadInfo />
                <Promo />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default Main;
