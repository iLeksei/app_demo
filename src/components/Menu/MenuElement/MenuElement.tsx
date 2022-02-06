import React, {ReactElement} from "react";
import Nav from "react-bootstrap/Nav";


import defaultSvg from "../../../icons/folder-svgrepo-com.svg"
import "./MenuElement.css";

interface IProps {
    description: string,
    link: string,
    isActive: boolean,
    counter?: number,
    icon?: any,
}

export const MenuElement = (props: IProps): ReactElement => {
    return (
        // <div className="menu-element__container">
        //     <img className="menu-element__img" src={defaultSvg} alt={props.description}/>
        //     <Nav.Link href={props.link} className="menu-element__description">{props.description}</Nav.Link>
        // </div>
        <Nav.Link className="menu-element__container" href={props.link}>
            <img className="menu-element__img" src={defaultSvg} alt={props.description}/>
            <span className="menu-element__description">{props.description}</span>
        </Nav.Link>
    );
}