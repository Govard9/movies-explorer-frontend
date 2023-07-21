import React, {useEffect, useState} from 'react';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies({
                         errorMovies,
                         isFirstRender,
                         setIsFirstRender,
                         savedMode,
                         saveMovies,
                         isRenderSavedFilms,
                         setIsRenderSavedFilms,
                         allMovies,
                         handleClickDeleteFilm,
                         savedFilmId
}) {

    const [filterSavedMovies, setFilterSavedMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setFilterSavedMovies(saveMovies);
    }, [saveMovies]);

    useEffect(() => {
        // Функция для удаления фильма из filterSavedMovies
        const updatedFilterMovies = filterSavedMovies.filter((mov) => mov._id !== savedFilmId);
        setFilterSavedMovies(updatedFilterMovies);
    }, [saveMovies, savedFilmId]);

    useEffect(() => {
        saveMovies.length > 0 && handleUpdateSearchSavedMovies({ toggle: false, film: '' });
    }, []);

    const handleUpdateSearchSavedMovies = (results) => {
        setIsLoading(true);
        setTimeout(() => {
            if (results.toggle) {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40 ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase()) && mov.duration <= 40
                );
                setFilterSavedMovies(filteredMovies.reverse());
                setIsRenderSavedFilms(false);
                setIsFirstRender('Ничего не найдено.');
            } else {
                const filteredMovies = saveMovies.filter((mov) =>
                    mov.nameRU.toLowerCase().includes(results.film.toLowerCase()) ||
                    mov.nameEN.toLowerCase().includes(results.film.toLowerCase())
                );
                setFilterSavedMovies(filteredMovies.reverse());
                setIsRenderSavedFilms(false);
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
