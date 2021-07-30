import React from "react";
import styled from "styled-components"
import RegisterBanner from "./../register/banner" 

function showLetter(){
    alert("hey")
}

const ChildBanner = () => 
<Styles>
    <div>Cooer is the community of the future...</div>
    <div className="letterIcon" onClick={showLetter}>
        <span></span>
        <span></span>
        <span></span>
    </div>
</Styles>;

const Styles = styled.div`
width: 100%;
background-color: rgba(19, 212, 106, 0.3);
padding: 0.1em;
display: flex;
flex-grow: 1;
justify-content: space-between;
align-items: center;
padding:0 0.9em;
height: 2rem;
.letterIcon {
    font-weight:bolder;
    font-size:120%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height:1rem;
    span{
        display: block;
        border: 1px solid #444;
        background: #444;
        width:4px;
        height:4px;
    }
}
@media (min-width: 650px){
    display: none;
}
`

export default ChildBanner;