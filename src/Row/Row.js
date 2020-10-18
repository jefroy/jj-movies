import React, {useEffect, useState} from 'react';
import axios from '../API/axios'
import requests from "../API/requests";
import "./Row.css";

function Row({title, fetchUrl, isLargeRow}) {
  // states (react variables)
  const [movies, setMovies] = useState([]);
  // a snippet of code which runs based on a specific condition/variable
  // when this row is loaded, run this useEffect
  useEffect(() => {
    // if [], run once on row load
    // if [movies], reload the row if movies changes
    // call an async function
    async function fetchData(){
      // wait for promise
      const request = await axios.get(fetchUrl); // IMPORTANT: specify this as a dependency down there
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className={'row'}>

      {/*  title*/}
      <h2>{title}</h2>

      <div className="row__posters">
        {/*  several row__poster(s)*/}
        {movies.map(movie => (
            // poster_path = "/akdopakwpodkap.jpb"
            <img
                key={movie.id} // unique identifier for effectively rendering changes
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`
                  ${requests.BASE_POSTER_PATH}${
                    isLargeRow ? movie.poster_path: movie.backdrop_path
                  }
                `}
                alt={movie.name}
            />
        ))}
      </div>

      {/*  container -> posters*/}

    </div>
  )
}

export default Row;
