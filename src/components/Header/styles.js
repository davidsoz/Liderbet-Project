import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem 0.8rem;
    border-radius: 3px;
    background-color: #E3E8F1;
    display: flex;
    gap: 50px;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

export const Checkboxes = styled.div`
    display: flex;
    gap: 12px;
`

export const CurrencyType = styled.div`
    display: flex; 
    gap: 0.5rem;
    align-items: center;
`

export const Swicher = styled.div`
    position: relative;
    width: 35px;
    height: 15px;
    padding: 2px;
    border-radius: 9px;
    background-color: lightgray;
    cursor: pointer;

    >span {
        position: absolute;
        left: ${props => props.left}px;
        width: 15px;
        height: 15px;
        background-color: #63738e;
        border-radius: 50%;
        transition: left 0.2s;
    }
`

export const SearchBar = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 1;
    justify-content: flex-end;
    >input {
        padding: 5px;
        flex-grow: 1;
        max-width: 300px;
        border-radius: 10px;
        border: none;
    }
    >img {
        height: 20px;
        cursor: pointer;
    }
`;