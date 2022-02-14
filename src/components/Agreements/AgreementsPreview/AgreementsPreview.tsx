import React, {ReactElement} from "react";
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
                scrolling="yes"
                src={"https://jsonplaceholder.typicode.com/"} //for test
                // src={props.src}
            />;
    }

    const renderPreviewDescription = (): ReactElement => {
        return (
            !!props.agreement?.agreementId ?
            <div/> :
            <div className="agreements-preview__warning"><h3>Выберете договор</h3></div>
        )
    }

    const renderAgreementInfo = (): ReactElement | string => {
        const NO_AUTHOR_MSG: string = "Автор не найден";
        return (
            !!props.src && !!props.agreement?.agreementId ?
            <>
                <div>Название договора: {props.agreement?.agreementName}</div>
                <div>Автор договора: {props.agreement?.agreementAuthor || NO_AUTHOR_MSG}</div>
            </> : ""
        )
    }

    return (
        <section className="agreements-preview__wrapper">
            <div className="agreements-preview__description">{renderPreviewDescription()}</div>
            <div className="agreements-preview__frame-container">
                {
                    renderAgreement()
                }
            </div>
            <div className="agreements-preview__agreement-info">{renderAgreementInfo()}</div>
        </section>
    );
}