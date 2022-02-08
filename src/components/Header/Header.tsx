import React, {ChangeEventHandler, ReactElement, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { StringUtils } from "../../utils/StringUtils";

import "./header.scss";
import searchIcon from "../../icons/search-icon.svg";
import evrazLogo from "../../icons/evraz_logo_1.svg";

interface IProps {
}

export const Header = (props: IProps): ReactElement => {
    const [docName, setDocName] = useState<string>("");

    const onInputChange = (e: any): void => {
        setDocName(StringUtils.sanitizeString(e?.target?.value || ""))
    }

    return (
        <header className="header__container">
            <div className="header__logo">
                <img alt="logo" src={evrazLogo} className="header__logo-img"/>
                <div className="header__logo-gradient"></div>
            </div>
            <Form className="header__form-container">
                <InputGroup className="mb-3 header__docs-input">
                    <FormControl
                        type="text"
                        id="doc-name-input"
                        value={docName}
                        onChange={onInputChange}
                        placeholder="Найти документы"
                        aria-label="Search documents input"
                    />
                    <InputGroup.Text>
                        <img src={searchIcon} alt="search-icon" className="header__find-docs-icon"/>
                    </InputGroup.Text>
                </InputGroup>

                <Button
                    id="search-docs-btn"
                    className="header__find-btn"
                    onClick={() => {}}
                >
                    Найти
                </Button>
            </Form>
        </header>

    );
}