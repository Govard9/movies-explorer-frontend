import React, {useEffect, useState} from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
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

    // const searchSaveFilm = (resultSearch) => {
    //     mainApi.getSavedFilms()
    //         .then((response) => {
    //             const newArrMovies = [];
    //
    //             response.map((movie) => {
    //                 if (movie.nameRU.toLowerCase().includes(resultSearch)) {
    //                     newArrMovies.push(movie)
    //                 }
    //             })
    //             setMovies(newArrMovies);
    //             setSavedMode(true)
    //         })
    // }

    const handleClickDeleteFilm = (index) => {
        mainApi.deleteFilm(movies[index]._id)
            .then((response) => {

                const film = movies[index];
                const filmId = film.movieId;

                console.log(response);
                const updatedMovies = [...movies];
                updatedMovies.splice(index, 1);
                setMovies(updatedMovies);

                // Удалить фильм из локального хранилища
                const savedFilms = JSON.parse(localStorage.getItem('savedFilms')) || [];
                const updatedFilms = savedFilms.filter((film) => film.id !== filmId);
                localStorage.setItem('savedFilms', JSON.stringify(updatedFilms));
            }).catch((error) => {
            // Обработка ошибки запроса
            console.error(error);
        });
    }

    return (
        <>
            <main className="content">
                <SearchForm onUpdateMovies={onUpdateMovies} movies={movies} savedMode={savedMode} />
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
