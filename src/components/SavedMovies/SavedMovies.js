import React from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies({ movies, onUpdateMovies, isLoading, errorMovies, isFirstRender }) {
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

export default SavedMovies;
