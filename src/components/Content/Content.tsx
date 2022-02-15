import React, {ReactElement} from "react";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";

import "./content.scss";

interface IProps {
    isMenuOpen: boolean;
}

export const Content = (props: IProps): ReactElement => {
    return (
        <div className={`content__container ${props.isMenuOpen ? "content__container-reduced" : ""}`} id="page-wrap">
            <Header/>
            <Main/>
        </div>
    );
}