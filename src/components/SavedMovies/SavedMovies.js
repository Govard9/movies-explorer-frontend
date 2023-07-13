import React, {useEffect, useState} from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function SavedMovies({ isLoading, errorMovies, isFirstRender, setIsLoading, setIsFirstRender }) {

    const [savedMode, setSavedMode] = useState(false);
    const [saveMovies, setSaveMovies] = useState([]);

    const [filterSavedMovies, setFilterSavedMovies] = useState([]);
    console.log(saveMovies)

    useEffect(() => {
        mainApi.getSavedFilms()
            .then((response) => {
                setSaveMovies(response)
                setFilterSavedMovies(response)
                setSavedMode(true)
                setIsFirstRender('')
            }).catch((err) => {
            console.log(err);
        });
    }, [])

    useEffect(() => {
        // При монтировании компонента извлекаем данные из локального хранилища
        const savedMovies = localStorage.getItem("moviesSaved");
        const savedSearchFilm = localStorage.getItem("searchFilm");
        const savedToggle = localStorage.getItem("toggle");

        // Проверяем, есть ли сохраненные данные в локальном хранилище
        if (savedMovies && savedSearchFilm && savedToggle) {
            const parsedMovies = JSON.parse(savedMovies);
            const parsedToggle = JSON.parse(savedToggle);

            // Обновляем состояния компонента
            handleUpdateSearchSavedMovies({film: savedSearchFilm, toggle: parsedToggle});
            setSaveMovies(parsedMovies);
        }
    }, [savedMode])

    const handleUpdateSearchSavedMovies = (results) => {
        console.log(results);
        setIsLoading(true);
        setTimeout(() => {
            if (results.toggle) {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40
                );
                localStorage.setItem('moviesSavedFilter', JSON.stringify(filteredMovies));
                setFilterSavedMovies(filteredMovies)
                setIsFirstRender('Ничего не найдено.')
            } else {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase())
                );
                localStorage.setItem('moviesSavedFilter', JSON.stringify(filteredMovies));
                setFilterSavedMovies(filteredMovies)
                setIsFirstRender('Ничего не найдено.')
            }

            setIsLoading(false);
            localStorage.setItem('searchFilm', results.film);
            localStorage.setItem('toggle', results.toggle);
        }, 2000)
    };

    const handleClickDeleteFilm = (index) => {

        mainApi.deleteFilm(filterSavedMovies[index]._id)
            .then((response) => {
                const film = filterSavedMovies[index];
                const filmId = film.movieId;

                console.log(response);
                const updatedMovies = [...saveMovies];
                updatedMovies.splice(index, 1);
                setSaveMovies(updatedMovies);
                setFilterSavedMovies(updatedMovies);

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
                <SearchForm onUpdateMoviesSaved={handleUpdateSearchSavedMovies} movies={filterSavedMovies} savedMode={savedMode} />
                { isLoading ?
                    <Preloader />
                    :
                    <MoviesCardList
                        movies={filterSavedMovies}
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
