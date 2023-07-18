import React, {useEffect, useState} from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function SavedMovies({
                         errorMovies,
                         isFirstRender,
                         setIsFirstRender,
                         savedMode,
                         saveMovies,
                         handleClickDeleteFilm,
                         isRenderSavedFilms,
                         setIsRenderSavedFilms,
                         allMovies
}) {

    const [filterSavedMovies, setFilterSavedMovies] = useState(JSON.parse(localStorage.getItem('moviesSavedFilter')) || []);

    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if (saveMovies.length === 0) {
    //         setIsFirstRender('Ничего не найдено');
    //     } else {
    //         setIsFirstRender('');
    //     }
    // }, [filterSavedMovies]);

    const handleUpdateSearchSavedMovies = (results) => {
        setIsLoading(true);
        setTimeout(() => {
            if (results.toggle) {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40 ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40
                );
                setIsRenderSavedFilms(false);
                setFilterSavedMovies(filteredMovies)
                setIsFirstRender('Ничего не найдено.');
            } else {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase())
                );
                setIsRenderSavedFilms(false);
                setFilterSavedMovies(filteredMovies)
                setIsFirstRender('Ничего не найдено.');
            }

            setIsLoading(false);
        }, 2000)
    };

    return (
        <>
            <main className="content">
                <SearchForm onUpdateMoviesSaved={handleUpdateSearchSavedMovies} movies={filterSavedMovies} savedMode={savedMode} />
                { isLoading ?
                    <Preloader />
                    :
                    <MoviesCardList
                        setIsFirstRender={setIsFirstRender}
                        movies={isRenderSavedFilms ? saveMovies : filterSavedMovies}
                        errorMovies={errorMovies}
                        isFirstRender={isFirstRender}
                        savedMode={savedMode}
                        handleClickDeleteFilm={handleClickDeleteFilm}
                        allMovies={allMovies}
                        saveMovies={saveMovies}
                    /> }
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
