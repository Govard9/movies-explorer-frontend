import './App.css';
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
    const [currentUser, setCurrentUser] = useState({});

    const [allMovies, setAllMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [saveMovies, setSaveMovies] = useState([]);
    const [isRenderSavedFilms, setIsRenderSavedFilms] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [errorMovies, setErrorMovies] = useState('');
    const [isFirstRender, setIsFirstRender] = useState('');

    const [errorTextAuth, setErrorTextAuth] = useState('');
    const [errorTextReg, setErrorTextReg] = useState('');
    const [errorTextProfile, setErrorTextProfile] = useState('');

    const [popupTooltipOpen, setPopupTooltipOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const onRegister = ({ name, email, password }) => {
        mainApi.register({ name, email, password })
            .then(() => {
                return mainApi.authorization({ email, password });
            })
            .then(() => {
                setLoggedIn(true);
                localStorage.setItem('loggedIn', true);
                navigate('/movies');
            })
            .catch((err) => {
                console.log(err);
                setErrorTextReg(`На сервере произошла ${err.toLowerCase()}`);
            });
    };

    function onAuthorization({ email, password }) {
        mainApi.authorization({ email, password }).then((res) => {
            setLoggedIn(true);
            localStorage.setItem('loggedIn', true);
            navigate('/movies');
        }).catch((err) => {
            console.log(err);
            setErrorTextAuth(`На сервере произошла ${err.toLowerCase()}`)
        });
    }

    function signOut() {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/');
    }

    useEffect(() => {
        loggedIn && mainApi.getUserInfoProfile()
            .then(({ name, email }) => {
                setCurrentUser({ name, email });
            }).catch((err) => {
            console.log(err);
        })
    }, [loggedIn])

    const handleUpdateUser = (data) => {
        mainApi.updateEditProfile(data)
            .then(res => {
                if (res) {
                    setCurrentUser(res);
                    setPopupTooltipOpen(true)
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorTextProfile(`На сервере произошла ${err.toLowerCase()}`);
            });
    };

    const handleLogin = () => {
        setLoggedIn(true);
    }

    const tokenCheck = () => {
        if (localStorage.getItem('token')) {
            const jwt = localStorage.getItem('token');
            mainApi.getCheckToken(jwt).then((res) => {
                if (res) {
                    handleLogin();
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect(() => {
        if (loggedIn) {
            moviesApi.getResultSearch()
                .then((res) => {
                    setAllMovies(res);
                })
                .catch((err) => {
                    console.log(err);
                    setMovies([])
                    setErrorMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер ' +
                        'недоступен. Подождите немного и попробуйте ещё раз')
                });
        }
    }, [loggedIn]);

    function handleSave(movie) {
        mainApi
            .saveFilm(movie)
            .then((savedMovie) => {
                setSaveMovies((prevMovies) => [savedMovie, ...prevMovies]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        Promise.all([mainApi.getUserInfoProfile(), mainApi.getSavedFilms()])
            .then(([currentUserInfo, moviesData]) => {
                setSaveMovies(
                    moviesData.filter((x) => x.owner === currentUserInfo._id)
                );
                setCurrentUser(currentUserInfo);
                setIsRenderSavedFilms(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [loggedIn])

    const handleClickDeleteFilm = (movieId) => {
        mainApi.deleteFilm(movieId)
            .then((res) => {
                setSaveMovies((state) => state.filter((item) => item._id !== movieId));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>

            {
                location.pathname === '/' ||
                location.pathname === '/movies' ||
                location.pathname === '/saved-movies' ||
                location.pathname === '/profile'
                    ?
                <Header loggedIn={loggedIn} signOut={signOut} />
                    :
                ''
            }

            <InfoTooltip />

            <Routes>

                <Route path="/signin" element={
                    <Login
                        onAuthorization={onAuthorization}
                        errorTextAuth={errorTextAuth}
                    />}/>

                <Route path="/signup" element={
                    <Register
                        onRegister={onRegister}
                        errorTextReg={errorTextReg}
                    />}/>

                <Route path="/" element={<Main/>}/>


                <Route
                    path="/movies"
                    element={
                        <ProtectedRoute
                            loggedIn={loggedIn}
                            component={Movies}
                            movies={movies}
                            errorMovies={errorMovies}
                            setIsLoading={setIsLoading}
                            isLoading={isLoading}
                            isFirstRender={isFirstRender}
                            setMovies={setMovies}
                            setIsFirstRender={setIsFirstRender}
                            handleSave={handleSave}
                            setErrorMovies={setErrorMovies}
                            allMovies={allMovies}
                            saveMovies={saveMovies}
                            handleClickDeleteFilm={handleClickDeleteFilm}
                        />
                    }
                />

                <Route
                    path="/saved-movies"
                    element={
                        <ProtectedRoute
                            loggedIn={loggedIn}
                            component={SavedMovies}
                            errorMovies={errorMovies}
                            isFirstRender={isFirstRender}
                            setMovies={setMovies}
                            movies={movies}
                            setIsFirstRender={setIsFirstRender}
                            setIsLoading={setIsLoading}
                            isLoading={isLoading}
                            setCurrentUser={setCurrentUser}
                            savedMode={true}
                            saveMovies={saveMovies}
                            handleClickDeleteFilm={handleClickDeleteFilm}
                            isRenderSavedFilms={isRenderSavedFilms}
                            setIsRenderSavedFilms={setIsRenderSavedFilms}
                            allMovies={allMovies}
                        />
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute
                            loggedIn={loggedIn}
                            component={Profile}
                            handleUpdateUser={handleUpdateUser}
                            errorTextProfile={errorTextProfile}
                            popupTooltipOpen={popupTooltipOpen}
                            setPopupTooltipOpen={setPopupTooltipOpen}
                            setErrorTextProfile={setErrorTextProfile}
                            signOut={signOut}
                        />
                    }
                />

                <Route path="*" element={<Error404 />} />

            </Routes>

        </CurrentUserContext.Provider>
    );
}

export default App;
