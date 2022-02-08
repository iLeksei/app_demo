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
        text: '№',
        sort: true,
        align: 'center',
    },
    {
        dataField: 'agreementName',
        text: 'Название договора',
        style: {
            fontSize: "12px",
        }
    },
    {
        dataField: 'agreementAuthor',
        text: 'Автор договора',
        style: {
            fontSize: "12px",
        }
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
                rowClasses="agreements__table-row"
                data={props.data || []}
                columns={columns}
                noDataIndication="No data"
                //@ts-ignore
                selectRow={selectRow}
                // striped
                // hover
                condensed
            />
        </div>
    );
}