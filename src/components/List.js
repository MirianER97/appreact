import React from 'react';
//import axios from 'axios';



const List = (names) => {

        return(
          <div>
            <h1>HOLA MUNDO</h1>
            <ul>
              {names.map(name=>
                <li key={name}>{name}</li>
                )}
            </ul>
            </div>
    );
}

export default List;