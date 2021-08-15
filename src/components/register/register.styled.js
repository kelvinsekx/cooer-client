import styled from "styled-components";

export let registerPage = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width:99.9vw;
margin-top: 0px;
border: none;
gap: 1em;
align-items: center;
//fairly large screen
@media (min-width: 650px){
    flex-direction: row;
    width: 92vw;
    margin: 2rem auto;
    border: 1px solid rgba(90, 0, 0, 0.4);
}
`