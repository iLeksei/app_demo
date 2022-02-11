import React from 'react';
import {BrowserRouter} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import {Menu} from "./components/Menu/Menu";
import {Content} from "./components/Content/Content";


function App() {
    return (
        <BrowserRouter>
            <div className="app__container" id="outer-container">
                <Menu />
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;
