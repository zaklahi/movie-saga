import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import Button from "@material-ui/core/button";

import './DetailsPage.css'

function DetailPage(){
    const dispatch = useDispatch()

    const history = useHistory()
    // const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const details = useSelector(store => store.details);
    
    

    
console.log('details log', details)
   




// },[])





    return (
        <main>
            <h1>Movie</h1>
            <section className="details">
              
                   
                        <div key={details.id} >
                        <div key={genres.id} >
                             
                            <img src={details.poster} alt={details.title}/>
                            <h3>{details.description}</h3>
                            <h1>{genres.name}</h1>

                            {/* <ul>{details.name && details.name.map(detail=>                     <li key={info}>
                        {detail}
                        </li>)}
                    </ul> */}

                            <Button onClick={() => history.push('/')}variant="outlined" color="primary">Back</Button>
                           
                        </div>
                        </div>
                       
                    
                
                {/* <button onClick={() => history.push(`/Details/${movie.id}`)}className="button">Next</button> */}

            </section>
        </main>

    );
   











}

export default DetailPage;