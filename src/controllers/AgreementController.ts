import {Agreements} from "../entities/Agreements";

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

}