import React from 'react';
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, onUpdateMovies, isLoading, errorMovies, isFirstRender }) {
    return (
        <>
            <Header />
            <main className="content">
                <SearchForm onUpdateMovies={onUpdateMovies} />
                { isLoading ? <Preloader /> : <MoviesCardList movies={movies} errorMovies={errorMovies} isFirstRender={isFirstRender} /> }
            </main>
            <Footer />
        </>
    );
}

export default Movies;
