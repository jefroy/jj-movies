import React from 'react';
import './App.css';
import Row from "../Row/Row";
import Requests from "../API/Requests";
const requests = new Requests();
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";

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
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
      />
      {/* backdrops */}
      <Row title={'Trending Now'} fetchUrl={requests.requests.fetchTrending}/>
      <Row title={'Top Rated'} fetchUrl={requests.requests.fetchTopRated}/>
      <Row title={'Action Movies'} fetchUrl={requests.requests.fetchActionMovies}/>
      <Row title={'Comedy Movies'} fetchUrl={requests.requests.fetchComedyMovies}/>
      <Row title={'Horror Movies'} fetchUrl={requests.requests.fetchHorrorMovies}/>
      <Row title={'Romance Movies'} fetchUrl={requests.requests.fetchRomanceMovies}/>
      <Row title={'Documentaries'} fetchUrl={requests.requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
