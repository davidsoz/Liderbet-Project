import styled from "styled-components";

export const SlotFrame = styled.div`
        padding: 5px;
        box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
        border-radius: 3px;
        &:hover {
            box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

            .prize {
                display: none;
            }
        
            .description {
                display: block;
            }

            .buttons {
                height: 50px;
            }

            .name {
                display: none;
            }

            .overlay {
                background-color: rgba(0, 0, 0, 0.75);
            }
        }
`;

export const Offer = styled.div`
    height: 200px;
    background-color: lightcoral;
    background: ${props => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    color: #fff;
    font-weight: bold;
    .overlay {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 200px;
        transition: background-color 0.1s;
    }
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .prize {
        padding: 5px;
        /* font-size: 20px; */
    }

    .description {
        display: none;
        p {
            margin-top: 5px;
            padding-left: 5px;
            font-size: 14px;
            font-weight: bolder;
        }

        span {
            padding-left: 5px;
            font-weight: 400;
            font-size: 12px;
        }
    }

    .discount {
        background-color: #c83800;
        width: 40%;
        flex-shrink: 0;
        text-align: center;
        padding: 8px 2px;
        >div:first-child {
            font-size: 11px;
        }
        >div:last-child {
            font-size: 20px;
            margin-top: 5px;
        }
    }
`
export const Bottom = styled.div`
    font-size: 11px;
    font-weight: bolder;
    padding: 5px;
    .price {
        color: #ffee3f;
        span {
            color: #ccc;
            text-decoration: line-through;
            margin-left: 10px;
        }
    }

    .buttons {
        height: 0;
        overflow: hidden;
        transition: height 0.1s;
        display: flex;
        justify-content: space-between;
        .buy, .for-friend {
            width: 47%;
            color: #fff;
            border: none;
            border-radius:2px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bolder;
        }

        .buy {
            background-color: #019741;
            
        }

        .buy:hover {
            background-color: #01b844;
        }

        .for-friend {
            background-color: #0076b4;
        }

        .for-friend:hover {
            background-color: #0097d7;
        }
    }
`