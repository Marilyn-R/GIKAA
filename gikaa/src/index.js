import React from 'react';
import ReactDOM from 'react-dom';
import Contenedor from './componentes/Contenedor';
import ContenedorCC from './componentes/ContenedorCC';
import Formsesion from './componentes/Formsesion';
/* const element = (
    <div>
        <h1>HOLA</h1>
    </div>
); */



const container =document.getElementById('app');
ReactDOM.render(<Formsesion/>
,container);