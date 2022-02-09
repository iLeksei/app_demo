import React, {ReactElement, SyntheticEvent} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import FormControl from "react-bootstrap/FormControl";

import "./agreementsFilter.scss";
import {StringUtils} from "../../../utils/StringUtils";


interface IProps {
    onChange: (name: string, value: any) => void;
    data: any;
}

export const AgreementsFilter = (props: IProps): ReactElement => {
    const toProcess = () => {
    };

    const onFilterChange = (e: any) => {
        console.log(e);
        props.onChange(e?.target?.name, StringUtils.sanitizeString(e?.target?.value || ""));
    }

    return (
        <Form className="agreements-filter__container">
            {/*<Button*/}
            {/*    id="to-process-btn"*/}
            {/*    className="agreements-filter__to-process-btn agreements-filter__filter-element"*/}
            {/*    onClick={toProcess}*/}
            {/*>*/}
            {/*    К действию*/}
            {/*</Button>*/}
            <FormControl
                id="agreement-name"
                name="agreement_name"
                className="agreements-filter__name agreements-filter__filter-element"
                placeholder="Название документа"
                value={props.data?.agreement_name || ""}
                //@ts-ignore
                onChange={onFilterChange}
            />
            {/*<CustomizedDatepicker*/}
            {/*    id="agreement-date"*/}
            {/*    name="agreement_date"*/}
            {/*    className="agreements-filter__agreement-date agreements-filter__filter-element"*/}
            {/*    timeInputLabel="Time:"*/}
            {/*    dateFormat="MM/dd/yyyy h:mm aa"*/}
            {/*    showTimeInput*/}
            {/*    selected={props.data?.docsDate || null}*/}
            {/*    onChange={onFilterChange}*/}
            {/*/>*/}
            <FormControl
                id="agreement-author"
                name="agreement_author"
                className="agreements-filter__author agreements-filter__filter-element"
                placeholder="Автор"
                value={props.data?.agreement_author || ""}
                //@ts-ignore
                onChange={onFilterChange}
            />
        </Form>
    );
}