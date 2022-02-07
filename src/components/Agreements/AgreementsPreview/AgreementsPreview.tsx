import React, {ReactElement} from "react";

import "./agreementsPreview.scss"
import {AgreementTableRecord} from "../../../entities/AgreementTableRecord";

interface IProps {
    src: string;
    agreement: AgreementTableRecord | null
}

export const AgreementsPreview = (props: IProps): ReactElement => {
    return (
        <section className="agreements-preview__container">
            {
                props.src &&
                <iframe
                    loading="lazy"
                    name="agreements-preview"
                    title="Просмотр договора"
                    src={props.src}
                />
            }
        </section>
    );
}