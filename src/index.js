import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header.js';
import Details from './Details.js';
import Trial from './trial'
import App from './Input'
function Gamelist() {

  return( 
    <>
    <Header/>
    <App/>
    
    </>
)
}

ReactDOM.render(<Gamelist/>,
  document.getElementById('root')
);


