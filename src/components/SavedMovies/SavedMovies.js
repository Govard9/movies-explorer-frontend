import React, {useEffect, useState} from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function SavedMovies({ onUpdateMovies, isLoading, errorMovies, isFirstRender }) {

    const [movies, setMovies] = useState([]);
    const [savedMode, setSavedMode] = useState(false);

    useEffect(() => {
        mainApi.getSavedFilms()
            .then((response) => {
                setMovies(response)
                setSavedMode(true)
            })
    }, [])

    const handleClickDeleteFilm = (index) => {
        mainApi.deleteFilm(movies[index]._id)
            .then((response) => {
                console.log(response);
                const updatedMovies = [...movies];
                updatedMovies.splice(index, 1);
                setMovies(updatedMovies);
            }).catch((error) => {
            // Обработка ошибки запроса
            console.error(error);
        });
    }

    return (
        <>
            <Header />
            <main className="content">
                <SearchForm onUpdateMovies={onUpdateMovies} />
                { isLoading ?
                    <Preloader />
                    :
                    <MoviesCardList
                        movies={movies}
                        errorMovies={errorMovies}
                        isFirstRender={isFirstRender}
                        savedMode={savedMode}
                        handleClickDeleteFilm={handleClickDeleteFilm}
                    /> }
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
