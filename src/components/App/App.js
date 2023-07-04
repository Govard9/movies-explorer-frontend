import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from '../Main/Main';
import Error404 from '../404/Error404';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import moviesApi from "../../utils/MoviesApi";
import {useEffect, useState} from "react";
import mainApi from "../../utils/MainApi";

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMovies, setErrorMovies] = useState('');
    const [isFirstRender, setIsFirstRender] = useState('');

    const handleUpdateSearch = (results) => {
        console.log(results)
        setIsLoading(true);

        moviesApi.getResultSearch()
            .then((movie) => {
                // setTimeout не обязателен, но я установил его для дольшей демонстрации прелоадера.
                setTimeout(() => {
                    if (results.toggle) {
                        const filteredMovies = movie.filter(
                            (mov) => mov.nameRU.includes(results.film) && mov.duration <= 40
                        );
                        localStorage.setItem('movies', JSON.stringify(filteredMovies));
                        setMovies(filteredMovies);
                        setIsFirstRender('Ничего не найдено.')
                    } else {
                        const filteredMovies = movie.filter((mov) =>
                            mov.nameRU.includes(results.film)
                        );
                        localStorage.setItem('movies', JSON.stringify(filteredMovies));
                        setMovies(filteredMovies);
                        setIsFirstRender('Ничего не найдено.')
                    }
                    setIsLoading(false);

                    localStorage.setItem('searchFilm', results.film);
                    localStorage.setItem('toggle', results.toggle);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
                setErrorMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер ' +
                    'недоступен. Подождите немного и попробуйте ещё раз')
            });
    }

    const handleClickDeleteFilm = (index) => {
        mainApi.deleteFilm(movies[index])
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
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/movies" element={<Movies
                movies={movies}
                onUpdateMovies={handleUpdateSearch}
                isLoading={isLoading}
                errorMovies={errorMovies}
                isFirstRender={isFirstRender}
                setMovies={setMovies}
            />}/>
            <Route path="/saved-movies" element={<SavedMovies
                onUpdateMovies={handleUpdateSearch}
                isLoading={isLoading}
                errorMovies={errorMovies}
                isFirstRender={isFirstRender}
                setMovies={setMovies}
            />}/>
            <Route path="/profile" element={<Profile/>}/>

            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
        </Routes>
    );
}

export default App;
