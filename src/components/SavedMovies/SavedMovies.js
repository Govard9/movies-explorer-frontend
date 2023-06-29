import React from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (
        <>
            <Header />
            <main className="content">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
