import {Agreements} from "../entities/Agreements";
import {AgreementTableRecord} from "../entities/AgreementTableRecord";
import {EntryData} from "../entities/EntryData";

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

}