import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Santos'>
        <Member name='Guilherme'/>
    </Family>
, document.getElementById('app'))

//lembrando que só conseguimos renderizar um único elementro com a função render
//para renderizarmos mais, temos que colocar eles dentro de um outro elementro. ex div
