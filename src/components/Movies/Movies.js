import React from 'react';
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, onUpdateMovies }) {
    return (
        <>
            <Header />
            <main className="content">
                <SearchForm onUpdateMovies={onUpdateMovies} />
                {/* Прелоадер готов к использованию. */}
                {/*<Preloader />*/}
                <MoviesCardList movies={movies} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
