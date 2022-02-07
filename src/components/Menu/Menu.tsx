import React, {ReactElement} from "react";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

import {AccordionToggler} from "../AccordionToggler/AccordionToggler";

import "./menu.css";

interface IProps {
}

const otherDocsMenu: { description: string, link: string, isActive: boolean, icon?: any }[] = [
]

const sedMenu: { description: string, link: string, isActive: boolean, icon?: any }[] = [
    { description: "Мои задачи", link: "/My_tasks", isActive: false },
    { description: "Мои документы", link: "/My_document", isActive: false },
    { description: "Договоры", link: "/Agreements", isActive: true },
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
        <menu className="menu__container">
            <Accordion defaultActiveKey="0" className="menu__accordion-menu_el">
                <AccordionToggler text={"CЭД"} eventKey="0"/>
                <Accordion.Collapse eventKey="0"><>{renderMenu(sedMenu)}</></Accordion.Collapse>
                <AccordionToggler text={"Остальные документы"} eventKey="1"/>
                <Accordion.Collapse eventKey="1"><>{renderMenu(otherDocsMenu)}</></Accordion.Collapse>
            </Accordion>
        </menu>
    );
}