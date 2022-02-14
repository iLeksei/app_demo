import React, {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import {Agreements} from "../Agreements/Agreements";

import "./main.scss"

interface IProps {
}

export const Main = (props: IProps): ReactElement => {
    return (
        <main className="main__container">
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/Agreements" element={<Agreements/>}/>
            </Routes>
        </main>
    );
}