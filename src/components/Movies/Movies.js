import React from 'react';
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
    return (
        <>
            <Header />
            <SearchForm />
            {/*<Preloader />*/}
            <MoviesCardList />
            <Footer />
        </>
    );
}

export default Movies;
