import styled from "styled-components";

export let styledBanner = styled.div`
width: 44%;
display: none;
div>div#brand{
    font-size: 3.0501rem;
    font-weight: 789.432;
    color: #0e7713;
    padding-bottom: 1.765rem;
}
div>div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    font-size:1.067rem;
    div{
        min-height: 5rem;
    }
    div:nth-child(3){
        height:10rem;
        // border: 2px solid red;
        display:flex;
        flex-direction: column-reverse;
    }
}
@media (min-width: 650px){
    display: block;
}
@media (min-width: 900px){
    div>div#brand{
        font-size: 3.2501rem;
        padding-bottom: 1.765rem;
    }
    div>div:nth-child(2){
        gap: 0.8em;
        font-size:1.367rem;
    }
}
@media (min-width: 1050px){
    div>div#brand{
        font-size: 3.3501rem;
        padding-bottom: 1.795rem;
    }
    div>div:nth-child(2){
        gap: 1em;
        font-size:1.4rem;
    }
}
`