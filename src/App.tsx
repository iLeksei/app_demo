import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Header } from './components/Header/Header';
import {Main} from "./components/Main/Main";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
    return (
        <BrowserRouter>
            <div className="app__container">
                <div className="app__header-container">
                    <Header/>
                </div>
                <div className="app__nav_content-container">
                    <Main/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
