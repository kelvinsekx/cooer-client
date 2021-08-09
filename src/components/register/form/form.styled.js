import styled, {css} from "styled-components";

export const StyledRegisterForm = styled.div`
width: 80%;
a{
    display: inline-block;
    color: black;
    border-bottom: 2px solid rgba(19, 212, 106, 0.6);
    padding:0 0.8em;
    text-decoration: none;
    &:hover{
        background:rgba(19, 212, 106, 0.3);
    }
}
div{
    background-color: white;
    form {
        #fieldset{
            display: flex;
            flex-direction: column;
            align-items: center;
            border: none !important;
            flex-shrink: 1;
            legend{
                color:#0e7713;
                font-size: 130%;
            }
            div#formContent{
                div.ytr{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                div.gendo{
                    div{
                        display: flex;
                    }
                }
            }
            button{
                margin: 2.345rem 0px;
                font-size: 1rem;
                color: white;
                background-color: #0e7713;
                border: 0px;
                border-radius: 2px;
                width: 70%;
            }
        }
    }
}
@media (min-width:650px){
    box-shadow: 1px 1px 1px 1px rgba(150, 140, 140, 0.323);
    width:48%;
    div {
        form {
            #fieldset {
                div#formContent{
                    div.ytr{
                        flex-direction: row;
                    }
                }
            }
        }
    }
    button{
        margin: 2.345rem 0px;
        font-size: 1.5rem;
        width: 40%;
    }
}
@media (min-width:900px){
    width:40%;
}
`

export let StyledInput = styled.div`
width: ${({w})=> {
    return  "90%"
}};
border-radius: 5px;
    label {
        span{
            display:inline-block;
            font-size: 60%;
            margin: 0px; 
            padding: 0px;
            color: #111;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in;
            transition-delay: 0.7s;
            ${
                (props) => props.tr && css`
                opacity: 1; 
                visibility: visible;               
                `
            }
        }
        input{
            padding: 0.99em 0 0.8em 0.7rem;
            width: 100%;
            border-radius: 5px;
            border: none;
            font-size: 0.77rem;
            background-color: rgba(150, 140, 140, 0.123);
            &::placeholder{
                color: #555;
                font-size: 1.2rem;
            }
            &:focus{
                outline: 0;
            }
        }
}

@media (min-width: 660px) {
    width: ${({w})=> w + "%"};
}
`