import React, {useEffect} from 'react';
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, onUpdateMovies, isLoading, errorMovies, isFirstRender, setMovies }) {

    console.log(movies)

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
            onUpdateMovies({ film: savedSearchFilm, toggle: parsedToggle });
            setMovies(parsedMovies);
        }
    }, []);

    return (
        <>
            <main className="content">
                <SearchForm onUpdateMovies={onUpdateMovies} movies={movies} />
                { isLoading ? <Preloader /> : <MoviesCardList movies={movies} errorMovies={errorMovies} isFirstRender={isFirstRender} /> }
            </main>
            <Footer />
        </>
    );
}

export default Movies;
