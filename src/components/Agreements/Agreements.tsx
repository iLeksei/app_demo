import React, {ReactElement, useEffect, useState} from "react";

import {AgreementController} from "../../controllers/AgreementController";
import {AgreementsPreview} from "./AgreementsPreview/AgreementsPreview";
import {AgreementsFilter} from "./AgreementsFilter/AgreementsFilter";
import {AgreementsTable} from "./AgreementsTable/AgreementsTable";
import {Agreements as AgreementsEntity } from "../../entities/Agreements";
import {AgreementUtils} from "../../utils/AgreementUtils";
import {AgreementTableRecord} from "../../entities/AgreementTableRecord";

import "./agreements.scss";

interface IProps {
}

export const Agreements = (props: IProps): ReactElement => {
    const [agreements, setAgreements] = useState<AgreementTableRecord[] | null>(null);
    const [agreementsCount, setAgreementsCount] = useState<number>(0);
    const [filterData, setFilterData] = useState<any>({});
    const [selectedAgreement, setSelectedAgreement] = useState<AgreementTableRecord | null>(null);

    useEffect(() => {
        getAgreements()
    }, [])

    const getAgreements = async () => {
        const result: AgreementsEntity | null = await AgreementController.getAgreementsList({});
        const tableData = AgreementUtils.mapToTableRecords(result);
        setAgreements(tableData);
        setAgreementsCount(Number.parseInt(result?.["@toplevelentries"] + "") || 0)
    }

    const onFilterChange = (name: string, value: any) => {
        console.log(name, value);
        setFilterData( (data: any) => ({...data, name: value}));
    }

    const onAgreementSelect = (agreement: AgreementTableRecord) => {
        console.log(agreement)
        setSelectedAgreement(agreement);
    }

    return (
        <div className="agreements__container">
            <div className="agreements__form-container">
                <AgreementsFilter data={filterData} onChange={onFilterChange}/>
                <AgreementsTable onSelect={onAgreementSelect} data={agreements} total={agreementsCount} />
            </div>
            <AgreementsPreview src={""} agreement={selectedAgreement} />
        </div>
    )
}