import React, {useEffect, useState} from 'react';
import axios from '../API/axios'
import requests from "../API/requests";
import "./Row.css";

import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

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

  // youtube player stuff
  const [trailerUrl, setTrailerUrl] = useState('');
  const opts = { // options
      height: '400',
      width: '100%',
      playerVars: {
          // dev google youtube player params
          autoplay: 1,
      },
  };

  const handleClick = (movie) => {
      if(trailerUrl){ // if the video is open, close it
          setTrailerUrl('');
      } else{
          console.log('movie name: ', movie.name);
          console.log('movie id: ', movie.id);
          movieTrailer(movie?.name || "")
              .then((url) => {
                  // https://www.youtube.com/watch?v=XTZX9psWJ9o
                  const urlParams = new URL(url).search; // search will give us everything after the '?'
                  console.log('urlParams: ', urlParams);
                  const urlSearchParams = new URLSearchParams(urlParams); // allow us to use .get
                  console.log('urlSearchParams.get(\'v\'): ', urlSearchParams.get('v'));
                  setTrailerUrl(urlSearchParams.get('v')); // gets the VALUE of the query, so ?v= VALUE
              })
              .catch((error) =>
                  console.log(error, trailerUrl)
              );
      }
  };

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
                onClick={() => handleClick(movie)}
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

      {/*  show video if url is valid*/}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}

export default Row;
