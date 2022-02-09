import React, {ReactElement} from "react";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from "react-bootstrap-table-next";

import {Agreements} from "../../../entities/Agreements";
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

    const paginationConfig = {
        sizePerPage: 5,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
        totalSize: props.total,
    }

    return (
        <div className="agreements__table-container">
            <BootstrapTable
                keyField='agreementId'
                rowClasses="agreements__table-row"
                data={props.data || []}
                columns={columns}
                pagination={ paginationFactory(paginationConfig) }
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