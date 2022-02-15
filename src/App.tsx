import React, {ReactElement, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
//@ts-ignore
import {push as BurgerMenu} from 'react-burger-menu'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import {Menu} from "./components/Menu/Menu";
import {Content} from "./components/Content/Content";
import MenuStateCtx from "./context/MenuStateCtx";
import {BurgerMenuIcon} from "./components/BugerMenuIcon/BurgerMenuIcon";

function App() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleMenu = ({isOpen}: any) => {
        setIsOpen(isOpen);
    }

    const renderMenuIcon = (isOpen: boolean): ReactElement | undefined => {
        return isOpen ? undefined :
            <BurgerMenuIcon onClick={() => toggleMenu({isOpen: true})} />
    }

    return (
        <BrowserRouter>
            <MenuStateCtx.Provider value={{isOpen: isOpen}}>
                <div className="app__container" id="outer-container">
                    <BurgerMenu
                        noOverlay
                        width={"11%"}
                        pageWrapId={"page-wrap"}
                        outerContainerId={"outer-container"}
                        isOpen={isOpen}
                        onStateChange={toggleMenu}
                        customBurgerIcon={renderMenuIcon(isOpen)}
                    >
                        <Menu/>
                    </BurgerMenu>
                    <Content/>
                </div>
            </MenuStateCtx.Provider>
        </BrowserRouter>
    );
}

export default App;
