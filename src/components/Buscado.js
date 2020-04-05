//import '../assets/style/Search.scss';
import React, { Component } from 'react';


class Buscando extends Component {

        busquedaRef = React.createRef();

        obtenerDatos = (e) =>{
            e.preventDefault();

            console.log(this.busquedaRef.current.value);
            //tomamos el valo de input
            const termino = this.busquedaRef.current.value;
            //lo enviamos al componente principal
            this.props.datosBusqueda(termino);
        }
        render(){
    return(
        <form onSubmit={this.obtenerDatos}>
                    <div className="row">
                      <div className="form-group col-md-100">
                            <h2 className="main__title">¿Que estas Buscando?</h2>
                           <input ref={this.busquedaRef} type="text" className="form-control
                                form-control-lg" placeholder="Escribe aqui...." />
                          </div>

  <div className="form-group col-md-4">
    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..." />
  </div>


        </div>
        </form>
    );
  }
}

export default Buscando;