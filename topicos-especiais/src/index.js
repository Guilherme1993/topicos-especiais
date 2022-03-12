import React from 'react';
import ReactDOM from 'react-dom';
// import Componente1 from './componentes/Componente1';
// import {CompA, CompB as B} from './componentes/Componente2';
// import  { Teste1, Teste2, Teste3 } from './componentes/MultiElementos';
// import Familia from './componentes/Familia';
// import FamiliaGomes from './componentes/FamiliaGomes';
// import Nome from './componentes/Nome';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
import Pai from './componentes/Pai';

const element = document.getElementById('root');

ReactDOM.render(
    <div>
        {/* <Componente1 /> */}
        {/* <CompA valor = 'Primeiro Componente'/>
        <B valor = 'Segundo Componente'/> */}
        {/* <Teste1 />
        <Teste2 />
        <Teste3 /> */}
        {/* <FamiliaGomes /> */}
        {/* <Familia sobrenome= 'Gomes' endereco= 'Rua Primeira' numero='nº 234' cidade='Franca' estado='SP'>
            <Nome nome= 'João'></Nome>
            <Nome nome = 'Alexandre'></Nome>
            <Nome nome = 'Joana'></Nome>
        </Familia> */}
        {/* <FamiliaGomes sobrenome='Gomes'/> */}
        {/* <ComponenteComFuncao/> */}
        <Pai/>
    </div>
    , element
)