import React, {ReactElement, SyntheticEvent, useState} from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

interface IProps {
}

interface IFilterData {
    docsDate: Date,
    author: string,
    docName: string,
    users: string,
    types: string,
}

export const DocsFilter = (props: IProps): ReactElement => {
    const [filterData, setFilterData] = useState<IFilterData | null>(null);

    const toProcess = () => {};

    const onFilterChange = (a: any, b: SyntheticEvent) => {
        console.log(a, b);
    }


    return (
        <Form className="docs-filter__container">
            <fieldset>
                <Button
                    id="to-process-btn"
                    onClick={toProcess}
                >
                    К действию
                </Button>
                <DatePicker
                    id="docs-date"
                    name="docs-date"
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    selected={filterData?.docsDate || null}
                    onChange={onFilterChange}
                />
            </fieldset>
        </Form>
    );
}