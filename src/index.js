import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import buscador from './components/buscador';
//import Holamundo from './components/Holamundo';
//import Stateful from '../src/components/Stateful';
//import Stateless from '../src/components/Stateless';
//import Button from '../src/components/Button';
//import Footer from '../src/components/Footer';
//import Header from '../src/components/Header';
//import Search from '../src/components/Search';
//import Carrusel from '../src/components/Carrusel';
import Layout from '../src/container/App';
//import Layout from '../src/container/examen2';
//import Login from './container/Login';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Login  />, document.getElementById('root'));
//ReactDOM.render(<Holamundo />, document.getElementById('root'));
//ReactDOM.render(<Stateful/>, document.getElementById('root'));
//ReactDOM.render(<Stateless/>, document.getElementById('root'));
//ReactDOM.render(<Button text="Guardar"/>, document.getElementById('root'));
ReactDOM.render(<Layout />, document.getElementById('root'));
//ReactDOM.render(<Carrusel />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));
//ReactDOM.render(<Footer />, document.getElementById('root'));
//ReactDOM.render(<Search />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
