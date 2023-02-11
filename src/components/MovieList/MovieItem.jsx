
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; 


const MovieItem = ({movies}) => {
    const [addMovie, setAddMovie] = useState('');
    const movieChoice = useSelector(store => store.movieChoice);
    const dispatch = useDispatch();

   
    const handleSubmit = (event) => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description
            }
        });
    } // I could be wrong with this...wasn't 100%. curious if just using pizza works as payload


    return (
        <>
        
        </>
    )
}

export default MovieItem;