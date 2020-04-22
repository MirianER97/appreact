import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/List';


class ArtesaniasConteiner extends Component{

    constructor(){
        super();
    
        this.state = {
          names: []
        };
        
        axios.get(" http://localhost:3001/names")
        .then(response =>{
          this.setState({
            names: response.data
          });
        })
        .catch(error => {
          console.log(error);
        })
    
      }
    render(){
return(
        <List />
    );
 }
}

export default ArtesaniasConteiner;