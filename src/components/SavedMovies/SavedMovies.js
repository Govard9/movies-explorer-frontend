import React, {useEffect, useState} from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function SavedMovies({ isLoading, errorMovies, isFirstRender, setIsLoading, setIsFirstRender, savedMode, setCurrentUser }) {

    const [saveMovies, setSaveMovies] = useState([]);
    const [isRender, setIsRender] = useState(true);

    const [filterSavedMovies, setFilterSavedMovies] = useState(JSON.parse(localStorage.getItem('moviesSavedFilter')) || []);

    useEffect(() => {
        Promise.all([mainApi.getUserInfoProfile(), mainApi.getSavedFilms()])
            .then(([currentUserInfo, moviesData]) => {
                setSaveMovies(
                    moviesData.filter((x) => x.owner === currentUserInfo._id)
                );
                setCurrentUser(currentUserInfo);
                setIsRender(false);
            })
            .catch((error) => {
                console.log(error);
            });

        // При монтировании компонента извлекаем данные из локального хранилища
        const savedSearchFilm = localStorage.getItem("searchFilm");
        const savedToggle = localStorage.getItem("toggle");

        // Проверяем, есть ли сохраненные данные в локальном хранилище
        if (savedSearchFilm && savedToggle) {
            const parsedToggle = JSON.parse(savedToggle);

            // Обновляем состояния компонента
            handleUpdateSearchSavedMovies({film: savedSearchFilm, toggle: parsedToggle});
        }
    }, [isRender])

    const handleUpdateSearchSavedMovies = (results) => {
        setIsLoading(true);
        setTimeout(() => {
            if (results.toggle) {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40 ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40
                );
                localStorage.setItem('moviesSavedFilter', JSON.stringify(filteredMovies));
                setFilterSavedMovies(filteredMovies)
                setIsFirstRender('Ничего не найдено.');
            } else {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase())
                );

                localStorage.setItem('moviesSavedFilter', JSON.stringify(filteredMovies));
                setFilterSavedMovies(filteredMovies)
                setIsFirstRender('Ничего не найдено.');
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

                const updatedMovies = [...saveMovies];
                updatedMovies.splice(index, 1);
                setSaveMovies(updatedMovies);
                setFilterSavedMovies(updatedMovies);

                // Удалить фильм из локального хранилища
                const savedFilms = JSON.parse(localStorage.getItem('savedFilmsDelete')) || [];
                const updatedFilms = savedFilms.filter((film) => film.id !== filmId);
                localStorage.setItem('savedFilmsDelete', JSON.stringify(updatedFilms));
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
                        setIsFirstRender={setIsFirstRender}
                        movies={isRender ? saveMovies : filterSavedMovies}
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
