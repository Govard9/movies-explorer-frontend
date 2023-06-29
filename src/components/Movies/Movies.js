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
            <main className="content">
                <SearchForm />
                {/* Прелоадер готов к использованию. */}
                {/*<Preloader />*/}
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
