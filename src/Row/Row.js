import React, {useEffect, useState} from 'react';
import axios from '../API/axios'
import Requests from "../API/Requests";
import "./Row.css";

import YouTube from "react-youtube";

const requests = new Requests();

function Row({title, fetchUrl, isLargeRow}) {
    let mediaType = ''; // /movie or /tv
  // states (react variables)
  const [movies, setMovies] = useState([]);
  // a snippet of code which runs based on a specific condition/variable
  // when this row is loaded, run this useEffect
  useEffect(() => {
    // if [], run once on row load
    // if [movies], reload the row if movies changes
    // call an async function
    async function fetchData(){
      // wait for promise //
      const axiosReq = await axios.get(fetchUrl); // IMPORTANT: specify this as a dependency down there
      console.log(axiosReq.data);
      setMovies(axiosReq.data.results);
      return axiosReq;
    }
    fetchData();
  }, [fetchUrl]);

  // get video id from extended api search based on show ID
  const [video, setVideo] = useState('');
  // youtube player stuff
  const opts = { // options
      height: '400',
      width: '100%',
      playerVars: {
          // dev google youtube player params
          autoplay: 1,
      },
  };

  const handleClick = (movie) => {
      if(video){ // if the video is open, close it
          setVideo('');
      } else{
          async function fetchVideoId(){
              // wait for promise //
              const axiosReq = await axios.get(requests.fetchVideosByType(movie.media_type, movie.id, fetchUrl)); // IMPORTANT: specify this as a dependency down there
              console.log(axiosReq.data);
              // console.log(axiosReq.data.videos.results[0]);
              setVideo(axiosReq.data.videos.results[0].key); // youtube video key
              return axiosReq;
          }
          fetchVideoId();
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
      {video && <YouTube videoId={video} opts={opts} />}

    </div>
  )
}

export default Row;
