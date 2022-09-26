import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;
max-width: 1920px;
padding: 10px;
margin: 0 auto;
user-select: none;
`

export const Gamezone = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
gap: 50px;
`
export const Offer = styled.div`
display: flex;
justify-content: space-between;
gap: 50px;
padding: 0 25px 0 15px;
position: relative;

.slider {
    width: 500px;
}

>span {
    &::before {
        content: ' ';
        position: absolute;
        left: 0;
        width: 5px;
        height: 100%;
        border-radius: 5px;
        background-color: #34C5A7;
    }
}
`

export const SlotsContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
gap: 10px;
`