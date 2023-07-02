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
import {useState} from "react";

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
                // setTimeout не обязателен, но я установил его для дольшей демонтрации прелоадера.
                setTimeout(() => {
                    if (results.toggle) {
                        const filteredMovies = movie.filter(
                            (mov) => mov.nameRU.includes(results.film) && mov.duration <= 40
                        );
                        setMovies(filteredMovies);
                        setIsFirstRender('Ничего не найдено.')
                    } else {
                        const filteredMovies = movie.filter((mov) =>
                            mov.nameRU.includes(results.film)
                        );
                        setMovies(filteredMovies);
                        setIsFirstRender('Ничего не найдено.')
                    }

                    setIsLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
                setErrorMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер ' +
                    'недоступен. Подождите немного и попробуйте ещё раз')
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
            />}/>
            <Route path="/saved-movies" element={<SavedMovies/>}/>
            <Route path="/profile" element={<Profile/>}/>

            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
        </Routes>
    );
}

export default App;
