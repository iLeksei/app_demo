import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {Menu} from "./components/Menu/Menu";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {NotificationsPage} from "./components/NotificationsPage/NotificationsPage";
import { SearchDocs } from './components/SearchDocs/SearchDocs';

function App() {
    return (
        <BrowserRouter>
            <div className="app__container">
                <div className="app__search-bar-container">
                    <SearchDocs/>
                </div>
                <div className="app__nav_content-container">
                    <div className="app__menu-container">
                        <Menu/>
                    </div>
                    <div className="app__content-container">
                        <div className="app__pages-container">
                            <Routes>
                                <Route path="/" element={<NotificationsPage/>}/>
                                <Route path="Notifications" element={<NotificationsPage/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
