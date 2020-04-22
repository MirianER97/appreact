import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return(
        <div className="App">
      <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/images/font-index.jpg'} width='400' alt='poke'/>
      <h1>APP LENGUAS</h1>
      <Link to='/Artesans'>Ver artesanias</Link>
      </header>
    </div>
        
    );
}

export default Home;