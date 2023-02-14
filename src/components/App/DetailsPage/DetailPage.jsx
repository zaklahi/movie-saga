import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import './DetailsPage.css'

function DetailPage(){

    const dispatch = useDispatch();
    const history = useHistory()
    // const details = useSelector(store => store.details);
    const details = useSelector(store => store.details);

    
console.log('details log', details)
   


    return (
        <main>
            <h1>Movie</h1>
            <section className="details">
              
                   
                        <div key={details.id} >
                             
                            <img src={details.poster} alt={details.title}/>
                            <h3>{details.description}</h3>
                            <h3>{details.genre}</h3>

                            <button onClick={() => history.push('/')}className="button">Back</button>
                           
                        </div>
                       
                    
                
                {/* <button onClick={() => history.push(`/Details/${movie.id}`)}className="button">Next</button> */}

            </section>
        </main>

    );
   











}

export default DetailPage;