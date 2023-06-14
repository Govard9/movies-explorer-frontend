import React from 'react';
import Header from "../Header/Header";
import HeadInfo from "./HeadInfo/HeadInfo";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main(props) {
    return (
        <>
            <Header />
            <HeadInfo />
            <Promo />
            <Techs />
        </>
    );
}

export default Main;
