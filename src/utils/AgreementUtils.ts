import {Agreements} from "../entities/Agreements";
import {AgreementTableRecord} from "../entities/AgreementTableRecord";

export class AgreementUtils {

    static mapToTableRecords = (data: Agreements | null): AgreementTableRecord[] | null | [] => {
        if (!data) { return null; };
        let result: any[] = [];
        const agreementNameColumnIdx: string = "5";
        const agreementAuthorColumnIdx: string = "6";

        result = data?.viewentry?.map( viewEntry => {
            let agreementRecord: any = {};
            agreementRecord.agreementId = viewEntry?.["@unid"];
            agreementRecord.agreementNum = viewEntry?.["@position"];
            const { agreementName, agreementAuthor }: any = viewEntry?.entrydata?.reduce((acc: any, entry: any ) => {
                const isAgreementNameColumn: boolean = entry?.["@columnnumber"] === agreementNameColumnIdx;
                const isAgreementAuthorColumn: boolean = entry?.["@columnnumber"] === agreementAuthorColumnIdx;
                if (isAgreementNameColumn) {
                    acc.agreementName = entry?.text?.["0"];
                }
                if (isAgreementAuthorColumn) {
                    acc.agreementAuthor = entry?.text?.["0"];
                }
                return acc;
            }, { agreementName: null, agreementAuthor: null })
            agreementRecord.agreementName = agreementName;
            agreementRecord.agreementAuthor = agreementAuthor;
            return agreementRecord;
        })
        return result;
    }

    static filterAgreements = (agreements: AgreementTableRecord[] | null, filterData: any): AgreementTableRecord[] => {
        if (!agreements) { return [] }
        if (!filterData?.agreement_name && !filterData?.agreement_author) { return [] }
        return agreements.filter( agreement => {
            if (filterData?.agreement_name && filterData?.agreement_author) {
                return agreement?.agreementName?.toLocaleLowerCase()
                        ?.includes(filterData.agreement_name.toLocaleLowerCase()) ||
                    agreement?.agreementAuthor?.toLocaleLowerCase()
                        ?.includes(filterData.agreement_author.toLocaleLowerCase());
            } else if (filterData?.agreement_name) {
                return agreement?.agreementName?.toLocaleLowerCase()
                        ?.includes(filterData.agreement_name.toLocaleLowerCase());
            } else if (filterData?.agreement_author) {
                agreement?.agreementAuthor?.toLocaleLowerCase()
                    ?.includes(filterData.agreement_author.toLocaleLowerCase());
            }
        })
    }

}