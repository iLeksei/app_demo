import React, {ReactElement } from "react";
import {AgreementTableRecord} from "../../../entities/AgreementTableRecord";

import "./agreementsPreview.scss"

interface IProps {
    src: string;
    agreement: AgreementTableRecord | null;
}

export const AgreementsPreview = (props: IProps): ReactElement => {

    const renderAgreement = () => {
        return !!props.src && !!props.agreement?.agreementId &&
            <iframe
                className="agreements__agreement-frame"
                loading="lazy"
                name="agreements-preview"
                title="Просмотр договора"
                // src={"https://jsonplaceholder.typicode.com/"} //for test
                src={props.src}
            />;
    }

    const renderPreviewDescription = (): ReactElement => {
        return (
            !!props.agreement?.agreementId ?
            <div>{props.agreement?.agreementName}</div> :
            <div className="agreements-preview__warning"><h3>Выберете договор</h3></div>
        )
    }

    return (
        <section className="agreements-preview__container">
            <div className="agreements-preview__description">{renderPreviewDescription()}</div>
            <div className="agreements-preview__frame-container">
                {
                    renderAgreement()
                }
            </div>
        </section>
    );
}