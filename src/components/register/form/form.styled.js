import styled from "styled-components";

export const StyledRegisterForm = styled.div`
width: 80%;
border: 0px;
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
div#reg-card{
    background-color: white;
    padding: 0.6em;
    form {
        #fieldset{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 1;
            legend{
                color:#0e7713;
                font-size: 100%;
            }
            div#formContent{
                display: flex;
                gap: 0.3em;
                div.ytr{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                div.gendo{
                    padding-top:0.5em;
                    div{
                        flex-grow: 1;
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
    width:42%;
    div#reg-card {
        form {
            #fieldset {
                legend{
                    font-size: 120%;
                }
                div#formContent{
                    div.ytr{
                        flex-direction: row;
                    }
                }
            }
        }
    }
    button{
        font-size: 1.5rem;
        width: 40%;
    }
}
@media (min-width:900px){
    width:40%;
}
`

