import React from 'react';
import {useState,useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css'
import searchIcon from './search.svg';

//  7ed38b21

const API_URL='http://www.omdbapi.com?apikey=7ed38b21';
const movie1={
  "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  "Year": "2016",
  "imdbID": "tt18689424",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

const App = ()=>{
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data=await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('');
  },[]);


  return(
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img 
          src={searchIcon}
          alt='search'
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length>0 
         ? (
              <div className='container'>
                {/* <div className='movie'>
                  <div>
                    <p>{movie1.Year}</p>
                  </div>
                  <div>
                    <img 
                      src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} 
                      alt={movie1.Title}
                    />
                  </div>
                  <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                  </div>
                </div> */}
      
      
                {/* <MovieCard movie1={movie1}/> */}

                {movies.map((movie)=>(
                  <MovieCard movie={movie}/>
                ))
                   
                }  

            </div>
         ) : (
            <div className='empty'>
                <h2>No movies found</h2>
            </div>
         )
      }

      
    </div>
  );
}

export default App;