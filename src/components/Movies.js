import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation';

function Movies() {

    let [movies, setMovies] = useState([]);

    let getMoviesFromServer =  async ()=>{
      let reqOptions = {
        method : "GET",
      };
  
      let JSONData = await fetch("https://freetestapi.com/api/v1/movies", reqOptions);
    let JSOData = await JSONData.json();
    setMovies(JSOData);
    console.log(JSOData);
    };
  
    useEffect(()=>{
        getMoviesFromServer();
      },[]);

  return (
    <div className="App">
        <TopNavigation/>
    
    <div className="MoviesContainer">
    {movies.map((ele,i)=>{
      return(
        <div className="moviesDiv">
         
        <img src={ele.poster} className="moviesPic"></img> 
        <p>{ele.title}</p>
        <p>Actors: {ele.actors}</p>
        <p>Director: {ele.director}</p>
        <p>Rating: {ele.rating}</p>
        <p>Year: {ele.year}</p>
        <p>Genre: {ele.genre}</p>
        <p>Runtime: {ele.runtime} mins</p>
        </div>
        
        
      );
    })}
    </div>
   
    </div>
  )
}

export default Movies