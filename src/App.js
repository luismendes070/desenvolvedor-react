import React from 'react';
import avatar from './luis-brasilia-2014.svg';
import './App.css';

function App() {
    return (
        <div className="App">

            <img src={avatar} className="App-logo" alt="logo"/>

            <article className="App-article">
                <p>
                    machadoluismendes@gmail.com
                    <div> https://github.com/luismendes070 </div>
                    <div> https://www.linkedin.com/in/luismendesmachado1/ </div>
                    <a
                        className="App-link"
                        href="https://github.com/luismendes070"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub demos
                    </a>

                    <h1>Objetivo</h1>
                    Desenvolvedor react remoto

                    <h1>Resumo</h1>

                    <h1>Formação</h1>
                    [jan 2011 dez 2013] IF Goiano Campus Urutai
                    <div></div>
                    Curso Superior Tecnologia em Análise e Desenvolvimento de Sistemas
                    <div></div>
                    Carga Horária 2191 horas
                    <div></div>
                    <h1>Idioma</h1>
                    Inglês avançado

                    <h1>Atividades Extracurriculares</h1>
                    Visitas técnicas
                    Minicursos
                </p>
            </article>

            <footer>
                All Rights Reserved
            </footer>

        </div>
    );
}

export default App;
