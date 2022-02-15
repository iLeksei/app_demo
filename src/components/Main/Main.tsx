import React, {ReactElement, useContext} from "react";
import {Route, Routes} from "react-router-dom";
import {Agreements} from "../Agreements/Agreements";

import "./main.scss"
import MenuStateCtx from "../../context/MenuStateCtx";

interface IProps {
}

export const Main = (props: IProps): ReactElement => {
    let menuStateCtx = useContext(MenuStateCtx);
    console.log(menuStateCtx)
    return (
        <main className={`main__container ${menuStateCtx.isOpen ? "main-reduced" : ""}`}>
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/Agreements" element={<Agreements/>}/>
            </Routes>
        </main>
    );
}