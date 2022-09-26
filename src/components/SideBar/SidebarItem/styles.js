import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border-top: 1px solid #f8f8f8;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-left: 0px solid #005473;
    transition: border 0.1s;
    
    >div {
        display: flex;
        gap: 10px;
        align-items: center;

        img {
            filter: invert(1)
        }
    }

    img {
        height: 12px;
    }

    &:hover {
        border-left-width: 5px;
        background-color: #f8f8f8;
    }
`;

export const Content = styled.div`
    padding: 0 0 0 42px;
    padding-bottom: ${props => props.expanded ? '7px' : 0};
    padding-top: ${props => props.expanded ? '7px' : 0};
    height: ${props => props.expanded ? props.height * 20 + 'px' : 0};
    overflow: hidden;
    transition: height 0.2s;
`;