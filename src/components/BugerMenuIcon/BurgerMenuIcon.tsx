import React, {ReactElement} from "react";

import "./burgerMenuIcon.scss";

interface IProps {
    onClick(): void;
}

export const BurgerMenuIcon = (props: IProps): ReactElement => {
    return (
        <div className="burger-menu__container" onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}