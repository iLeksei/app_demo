import React, {ReactElement} from "react";
import {Agreements} from "../../../entities/Agreements";
import BootstrapTable from "react-bootstrap-table-next";
import {AgreementTableRecord} from "../../../entities/AgreementTableRecord";

import "./agreementsTable.scss"

interface IProps {
    data: AgreementTableRecord[] | null;
    total: number;
    onSelect?: (record: AgreementTableRecord) => void;
}

const columns = [
    {
        dataField: 'agreementId',
        text: 'ИД договора',
        sort: true,
        hidden: true,
    },
    {
        dataField: 'agreementNum',
        text: 'Порядковый номер договора',
        sort: true
    },
    {
        dataField: 'agreementName',
        text: 'Название договора'
    },
    {
        dataField: 'agreementAuthor',
        text: 'Автор договора'
    }
];



export const AgreementsTable = (props: IProps): ReactElement => {

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: props.onSelect,
    };

    return (
        <div className="agreements__table-container">
            <BootstrapTable
                keyField='agreementId'
                data={props.data || []}
                columns={columns}
                //@ts-ignore
                selectRow={selectRow}
                // striped
                hover
                condensed
            />
        </div>
    );
}