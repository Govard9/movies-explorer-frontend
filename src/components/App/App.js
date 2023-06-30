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

    const handleUpdateSearch = (resFilm) => {
        console.log(resFilm)
        resFilm && moviesApi.getResultSearch().then(movie => {
            setMovies(movie);
            console.log(movie)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/movies" element={<Movies
                movies={movies}
                onUpdateMovies={handleUpdateSearch}
            />}/>
            <Route path="/saved-movies" element={<SavedMovies/>}/>
            <Route path="/profile" element={<Profile/>}/>

            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
        </Routes>
    );
}

export default App;
