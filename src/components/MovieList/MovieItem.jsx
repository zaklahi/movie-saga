
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';


const MovieItem = ({movies}) => {
    const [title, setTitle] = useState('');
    const [poster, SetPoster] = useState('');
    const [description, setDescription] = useState('');
    //// useHistory and dispatch
    const dispatch = useDispatch();
    const history = useHistory()

   
    const handleSubmit = (event) => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description:description
                
            }
        });
    } 
    return (
        <>
        <div> 
           {/* <button onClick={(handleSubmit) => history.push('/Details')} className="button">Next</button> */}

            
        </div>
       
        </>
    )
}

export default MovieItem;