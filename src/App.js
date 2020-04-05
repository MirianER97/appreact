import React, {Component} from'react';
import './App.css';
import Buscado from './components/Buscado';




class App extends Component {

  state= {
    termino : ''
  }

  consultaApi=() => {

    const url='https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}';
  }


    datosBusqueda = (termino) => {
     this.setState({
       termino
     }, () => {
      this.consultaApi();
      })
    }


  render() {
  return (
    <div className="App container">
      <div className="jumbotron">

        <Buscado
        
        datosBusqueda={this.datosBusqueda}
        
        
        />
        </div>
        {this.state.termino}
    </div>
  );
  }
}

export default App;
