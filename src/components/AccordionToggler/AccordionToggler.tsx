import React, {ReactElement, useRef} from "react";
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";

import arrowIcon from "../../icons/arrow.svg";
import "./accordionTogger.css";

interface IProps {
    text: string,
    eventKey: any,
}

export const AccordionToggler = ({ text, eventKey }: IProps): ReactElement => {
    const iconRef = useRef(true);
    const decoratedOnClick = useAccordionButton(eventKey, () => {
            iconRef.current = !iconRef.current;
        }
    );

    const style = {
        transform: iconRef.current ? 'rotate(360deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    return (
        <div className="accordion-toggler__container" onClick={decoratedOnClick}>
            <div className="accordion-toggler__text">{text}</div>
            <img src={arrowIcon} className="accordion-toggler__icon" style={style} />
        </div>
    )
};