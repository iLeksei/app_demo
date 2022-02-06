import React, {ReactElement} from "react";
import Button from "react-bootstrap/Button";

interface IProps {
}

export const SearchDocs = (props: IProps): ReactElement => {
    return (
        <div className="search-docs__container">

            <Button
                id="search-docs-btn"
                onClick={() => {}}
            >
                Найти
            </Button>
        </div>
    );
}