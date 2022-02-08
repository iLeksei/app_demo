import {Agreements} from "../entities/Agreements";
import {CommonUtils} from "../utils/CommonUtils";

export class AgreementController {

    static getAgreementsList = async (filterData: any): Promise<Agreements | null> => {
        try {
            const response: Response = await fetch(`http://127.0.0.1:1414/agreements`); //todo past real url
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