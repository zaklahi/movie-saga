import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

   const handleClick= (movie) => { 
        dispatch({type:'FETCH_GENRES', payload: movie})
        history.push(`/details/${movie.id}`)
    }

    
 
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                   
                        <div key={movie.id} >
                             {/* <MovieItem/> */}
                            <h3>{movie.title}</h3>
                            
                            <img src={movie.poster} alt={movie.title}/>

                            <button onClick={() =>  handleClick(movie)}className="button">Next</button>
                           
                        </div>
                    );
                })}
                {/* <button onClick={() => history.push(`/Details/${movie.id}`)}className="button">Next</button> */}

            </section>
        </main>

    );
}

export default MovieList;