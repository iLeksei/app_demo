import React, {ChangeEventHandler, ReactElement, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { StringUtils } from "../../utils/StringUtils";

import "./searchDocs.scss";
import searchIcon from "../../icons/search-icon.svg";
import evrazLogo from "../../icons/ivraz_logo_2.png";

interface IProps {
}

export const Header = (props: IProps): ReactElement => {
    const [docName, setDocName] = useState<string>("");

    const onInputChange = (e: any): void => {
        setDocName(StringUtils.sanitizeString(e?.target?.value || ""))
    }

    return (
        <div className="search-bar__container">
            <div className="menu__logo">
                <img alt="logo" src={evrazLogo}/>
                <div className="menu__logo-gradient"></div>
            </div>
            <Form className="search-docs__container">
                <InputGroup className="mb-3 search-docs__docs-input">
                    <FormControl
                        type="text"
                        id="doc-name-input"
                        value={docName}
                        onChange={onInputChange}
                        placeholder="Найти документы"
                        aria-label="Search documents input"
                    />
                    <InputGroup.Text>
                        <img src={searchIcon} alt="search-icon" className="search-docs__find-docs-icon"/>
                    </InputGroup.Text>
                </InputGroup>

                <Button
                    id="search-docs-btn"
                    className="search-docs__find-btn"
                    onClick={() => {}}
                >
                    Найти
                </Button>
            </Form>
        </div>

    );
}