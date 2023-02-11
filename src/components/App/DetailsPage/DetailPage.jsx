import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DetailsPage.css'

function DetailPage(){

    const dispatch = useDispatch();
    const history = useHistory()
    const movies = useSelector(store => store.movies);
    const details = useSelector(store => store.details);

   

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
    }, []);

    return (
        <main>
            <h1>Info</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <h4>{movie.description}</h4>
                            <h4>{movie.genre}</h4>
                            

                            
                            
                            <img src={movie.poster} alt={movie.title}/>

                       
                           
                         
                           
                        </div>
                        
                    );
                })}
                 <button onClick={() => history.push('/')} className="button">Back</button>
            </section>
        </main>

    );












}

export default DetailPage;