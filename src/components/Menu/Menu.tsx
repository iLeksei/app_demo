import React, {ReactElement} from "react";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

import {MenuElement} from "./MenuElement/MenuElement";

import evrazLogo from "../../icons/evraz_logo_2.png";
import "./menu.css";
import {AccordionToggler} from "../AccordionToggler/AccordionToggler";

interface IProps {
}

const otherDocsMenu: { description: string, link: string, isActive: boolean, icon?: any }[] = [
]

const sedMenu: { description: string, link: string, isActive: boolean, icon?: any }[] = [
    { description: "Мои задачи", link: "/My_tasks", isActive: false },
    { description: "Мои документы", link: "/My_document", isActive: true },
    { description: "Договоры", link: "/Agreements", isActive: false },
    { description: "Завки", link: "/Applications", isActive: false },

]

export const Menu = (props: IProps): ReactElement => {

    const renderMenu = (menu: { description: string, link: string, isActive: boolean, icon?: any }[]): any => {
        return menu.map( (el, idx) => {
            return (
                <Nav.Link
                    href={el.link}
                    key={idx + el.link}
                    className="menu__element"
                    disabled={!el.isActive}
                >
                    {el.description}
                </Nav.Link>
            )
        })
    }

    return (
        <Nav className="menu__container">
            <Accordion defaultActiveKey="0" alwaysOpen className="menu__accordion-menu_el">
                <AccordionToggler text={"CЭД"} eventKey="0"/>
                <Accordion.Collapse eventKey="0"><>{renderMenu(sedMenu)}</></Accordion.Collapse>
                <AccordionToggler text={"Остальные документы"} eventKey="1"/>
                <Accordion.Collapse eventKey="1"><>{renderMenu(otherDocsMenu)}</></Accordion.Collapse>
            </Accordion>

        </Nav>
    );
}