import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './component'


ReactDOM.render(
    <div>
        <Primeiro/>
        <Segundo/>
    </div>
, document.getElementById('app'))

//lembrando que só conseguimos renderizar um único elementro com a função render
//para renderizarmos mais, temos que colocar eles dentro de um outro elementro. ex div
