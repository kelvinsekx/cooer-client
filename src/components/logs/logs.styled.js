import styled from "styled-components";

export const StyledFooter = styled.div`
    padding-top: 2rem;
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        div.forgotten{
            cursor: pointer;
            text-align: center;
            width: 100%;
            color: #0e7713;
            font-size:109%;
            padding-bottom: 1%;
            border-bottom: 1px solid rgba(0,0,0,0.3);
            a{
                text-decoration: none;
                color: inherit;
            }
        }
    }
    footer>.c_n_a{
        padding-top: 0.45em;
        font-size: 1.06rem;
        border-radius: 5px;
        border: none;
        a{
            // border-bottom: 2px solid rgba(19, 212, 106, 0.5);
            // text-decoration: none;
            // display: inline-block;
            color: inherit;
            // &:hover{
            //     background-color: rgba(19, 212, 106, 0.4);
            // }
            // &:active{
            //     background-color: rgba(19, 212, 106, 0.3);
            // }  
        }
    }
`;