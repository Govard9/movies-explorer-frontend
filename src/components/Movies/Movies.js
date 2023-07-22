import React, {useEffect, useState} from 'react';
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";

function Movies({
                    movies,
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

    const [filterMovies, setFilterMovies] = useState(localStorage.getItem("filteredMovies") || '[]');

    useEffect(() => {
        // При монтировании компонента извлекаем данные из локального хранилища
        const savedSearchFilm = localStorage.getItem("searchFilm");
        const savedToggle = localStorage.getItem("toggle");

        // Проверяем, есть ли сохраненные данные в локальном хранилище
        if (savedSearchFilm && savedToggle) {
            const parsedToggle = JSON.parse(savedToggle);

            // Обновляем состояния компонента
            handleUpdateSearchAllMovies({ film: savedSearchFilm, toggle: parsedToggle });
        }
    }, []);

    const handleUpdateSearchAllMovies = (results) => {
        setIsLoading(true);
        setTimeout(() => {
            if (results.toggle) {
                const dataFilter = JSON.parse(filterMovies);
                if (allMovies.length > 0) {
                    const filteredMovies = allMovies.filter((mov) =>
                        (mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40) ||
                        (mov.nameEN.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40)
                    );
                    setMovies(filteredMovies);
                    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
                } else if (allMovies.length <= 0) {
                    const filteredMovies = dataFilter.filter((mov) =>
                        (mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40) ||
                        (mov.nameEN.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40)
                    );
                    setMovies(filteredMovies);
                    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
                }
                setIsFirstRender('Ничего не найдено.');
            } else {
                const dataFilter = JSON.parse(filterMovies);
                if (allMovies.length > 0) {
                    const filteredMovies = allMovies.filter((mov) =>
                        mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) ||
                        mov.nameEN.toLowerCase().includes(results.film.toLowerCase())
                    );
                    setMovies(filteredMovies);
                    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
                } else if (allMovies.length <= 0) {
                    const filteredMovies = dataFilter.filter((mov) =>
                        mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) ||
                        mov.nameEN.toLowerCase().includes(results.film.toLowerCase())
                    );
                    setMovies(filteredMovies);
                    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
                }
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
