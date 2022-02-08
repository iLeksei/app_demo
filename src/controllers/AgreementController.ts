import {Agreements} from "../entities/Agreements";
import {CommonUtils} from "../utils/CommonUtils";

export class AgreementController {

    /**
     * @param filterData - todo: make a flexible url, when filter with filterData will be realised
     */
    static getAgreementsList = async (filterData: any): Promise<Agreements | null> => {
        try {
            const url: string = CommonUtils.getDocsServiceHost() +
                "/referent/br_dogovory.nsf/AllDocuments?ReadViewEntries&Outputformat=JSON&count=15";
            const response: Response = await fetch(`${url}`);
            const result =  await response.json();
            return result;
        } catch (e) {
        }
        return Promise.resolve(null)
    }

    static getAgreementPreviewUrl = (agreementId?: string) => {
        return CommonUtils.getDocsServiceHost() + `/Referent/br_dogovory.nsf/0/${agreementId}`;
    }

}