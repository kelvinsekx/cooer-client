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
            border-bottom: 2px solid rgba(19, 212, 106, 0.5);
            text-decoration: none;
            display: inline-block;
            color: inherit;
            &:hover{
                background-color: rgba(19, 212, 106, 0.4);
            }
            &:active{
                background-color: rgba(19, 212, 106, 0.3);
            }  
        }
    }
`;

export const StyledLogs = styled.div`
display: flex;
justify-content: center;
#logs {
background-color: white;
min-height: 20rem;
width: 55%;
padding: 3rem;
border-radius: 5px;
box-shadow: 3px 5px 40px 3px rgba(71, 67, 67, 0.2);
form{
    display: flex;
    flex-direction: column;
    input, button {
        padding: 0 2rem;
        min-height: 3rem;
        font-size: 1.6rem;
        border-radius: 0.31rem;
    }
    input {
        margin-top: 0.1em;
        margin-bottom: 0.9rem;
        border: 1px solid grey;
        color: grey;
        &:hover{
            border: 1px solid #0e7713;
        }
        &:focus{
            outline: 0;
        }
    }
    button{
        color: white;
        background-color: #0e7713;
        border:none;
        cursor: pointer;
        &:hover{
            background-color: #108f16;
        }
        &:active{
            background-color: #0c420e;
        }
    }
}
}

// mobile screen
@media (max-width: 900px){
    width: 70%;
   #logs{
    min-height: 18rem;
    padding: 3rem;
    width: 100%;
    form{
        input, button {
            padding: 0.19rem 1rem;
            font-size: 1.37rem;
            border-radius: 0.31rem;
        }
        input {
            margin-top: 0.054em;
            margin-bottom: 0.4rem;
            &::placeholder{
                font-size: 1.37rem;
            }
        }
        button{
            font-size: 99%;
        }
    }
   }
}

// very small screen
@media (max-width: 900px){
    width: 100%;
    #logs{ 

    }
}
`