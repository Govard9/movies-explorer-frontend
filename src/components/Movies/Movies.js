import React, {useEffect, useState} from 'react';
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";

function Movies({
                    movies,
                    onUpdateMovies,
                    errorMovies,
                    isFirstRender,
                    setMovies,
                    setIsFirstRender,
                    handleSave,
                    loggedIn,
                    setErrorMovies,
                    setIsLoading,
                    isLoading,
                    allMovies,
                    saveMovies,
                    handleClickDeleteFilm
}) {

    useEffect(() => {
        // При монтировании компонента извлекаем данные из локального хранилища
        const savedMovies = localStorage.getItem("movies");
        const savedSearchFilm = localStorage.getItem("searchFilm");
        const savedToggle = localStorage.getItem("toggle");

        // Проверяем, есть ли сохраненные данные в локальном хранилище
        if (savedMovies && savedSearchFilm && savedToggle) {
            const parsedMovies = JSON.parse(savedMovies);
            const parsedToggle = JSON.parse(savedToggle);

            // Обновляем состояния компонента
            handleUpdateSearchAllMovies({ film: savedSearchFilm, toggle: parsedToggle });
            setMovies(parsedMovies);
        }

    }, []);

    const handleUpdateSearchAllMovies = (results) => {
        setIsLoading(true);
        setTimeout(() => {
            if (results.toggle) {
                const filteredMovies = allMovies.filter((mov) =>
                    (mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40) ||
                    (mov.nameEN.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40)
                );
                setMovies(filteredMovies);
                setIsFirstRender('Ничего не найдено.');
            } else {
                const filteredMovies = allMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase())
                );
                setMovies(filteredMovies);
                setIsFirstRender('Ничего не найдено.');
            }
            setIsLoading(false);
            setErrorMovies('');

            localStorage.setItem('searchFilm', results.film);
            localStorage.setItem('toggle', results.toggle);
        }, 2000);
    };

    return (
        <>
            <main className="content">
                <SearchForm onUpdateMovies={handleUpdateSearchAllMovies} movies={movies} />
                { isLoading ?
                    <Preloader />
                    :
                    <MoviesCardList
                        setIsFirstRender={setIsFirstRender}
                        movies={movies}
                        errorMovies={errorMovies}
                        isFirstRender={isFirstRender}
                        handleSave={handleSave}
                        saveMovies={saveMovies}
                        allMovies={allMovies}
                        handleClickDeleteFilm={handleClickDeleteFilm}
                    /> }
            </main>
            <Footer />
        </>
    );
}

export default Movies;
