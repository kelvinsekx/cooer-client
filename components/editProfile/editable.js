import React from "react"
import styled from "styled-components";

const EDITABLE = ({Icon,bio, name, handleChange, n})=> 
<Styles>
    <div><Icon style={{fontSize: "inherit", color: "inherit"}}/></div>
    <div>
        <span>{name}</span>
        <span>
        <input 
            value={bio} 
            name= {n}
            onChange={handleChange} 
        /></span>
    </div>
</Styles>

const Styles = styled.div`
    display: flex;
    min-height: 4rem;
    div:nth-child(1){
        flex-basis: 3rem;
        padding: 0 0.5em;
        font-size:120%;
        //border: 1px solid red;
        color: rgb(27, 214, 10);
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        span:nth-child(1){
            color: #444;
            font-size: 110%;
        }
        span:nth-child(2){
            font-size:103%;
            input{
                border: none;
                font-size: inherit;
                min-height: 2rem;
                min-width: 15rem;
            } 
        }
    }
`

export default EDITABLE;