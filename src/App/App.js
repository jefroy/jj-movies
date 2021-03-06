import React from 'react';
import './App.css';
import Row from "../Row/Row";
import Requests from "../API/Requests";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";

const requests = new Requests();

function App() {
  return (
    <div className="app">

      {/*  nav */}
      <Nav/>

      {/*  Banner */}
      <Banner/>

      {/* row */}
      <Row // posters
          title={'Netflix Originals'}
          fetchUrl={requests.fetchNetflixOriginals()}
          isLargeRow
      />
      {/* backdrops */}
      <Row title={'Trending Now'} fetchUrl={requests.fetchTrending()}/>
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated()}/>
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies()}/>
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies()}/>
      <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies()}/>
      <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies()}/>
      <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries()}/>

    </div>
  );
}

export default App;
