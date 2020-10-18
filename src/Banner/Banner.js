import React, {useEffect, useState} from 'react';
import requests from "../API/requests";
import axios from "../API/axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      //
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
          request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1) // grab a random movie to put in the banner
          ]
      );
      // console.log(request.data.results); // [ movie1, movie2, movie3, ..]
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "${requests.BASE_POSTER_PATH}/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
        }}
    >
      <div className="banner__contents">
        {/*  title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/*  div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/*  description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>

      </div>

      <div className="banner__fadeBottom" />

    </header>
  )
}

export default Banner;
