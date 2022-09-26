import { useState } from 'react';

import arrow from "../../../images/right-arrow.png";

import * as Styled from './styles';

export default function SidebarItem({iconURL, title, children, onClick, expand = false, contentHeight = 0}) {
    const [expanded, setExpanded] = useState(expand);

    function expandHandler() {
        if(children?.length) {
            setExpanded(!expanded);
        } else {
            onClick();
        }
    }

    return (
        <Styled.Container>
            <Styled.Header onClick={expandHandler}>
                <div>
                    {iconURL && <img src={iconURL} alt="icon" />}
                    <span>{title}</span>
                </div>
                {children?.length ? <img src={arrow} alt="arrow" /> : ''}
            </Styled.Header>
            <Styled.Content expanded={expanded} height={contentHeight || children?.length}>
                {children}
            </Styled.Content>
        </Styled.Container>
    )
}
