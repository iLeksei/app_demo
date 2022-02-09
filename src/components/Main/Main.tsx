import React, {ReactElement} from "react";
import {Menu} from "../Menu/Menu";
import {Route, Routes} from "react-router-dom";
import {Agreements} from "../Agreements/Agreements";

import "./main.scss"

interface IProps {
}

export const Main = (props: IProps): ReactElement => {
    return (
        <main className="main__container">
            <nav className="main__menu-container">
                <Menu />
            </nav>
            <div className="main__content-container">
                <Routes>
                    <Route path="/" element={<></>}/>
                    <Route path="Agreements" element={<Agreements/>}/>
                </Routes>
            </div>
        </main>
    );
}