import React from 'react';
import Header from "../Header/Header";
import HeadInfo from "./HeadInfo/HeadInfo";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Main(props) {
    return (
        <>
            <Header />
            <HeadInfo />
            <Promo />
            <Techs />
            <AboutMe />
            <Portfolio />
        </>
    );
}

export default Main;
