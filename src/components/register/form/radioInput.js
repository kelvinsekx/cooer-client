import React from "react";
import styled from "styled-components"

const RADIO = ({value, handleChange, ID})=> {
    return (
        <Styles>
        <label htmlFor={ID}>
            <input 
                id={ID}
                type="radio" 
                value={value} 
                name="gender"
                onClick={handleChange("gender")}
            />
            <div className="ck"></div>
        {value}
        </label>
        </Styles>
    )
};

let Styles = styled.div`
font-size: 110%;
cursor: pointer;
label{
div.ck{
    position: relative;
    top: 0.18rem;
    //left: 0.92rem;
    border: 2px solid #AAAAAA;
    border-radius: 50%;
    height: 13px;
    width: 13px;
    z-index: 2;
    transition: border .25s linear;
    -webkit-transition: border .25s linear;
    ::before {
        display: block;
        position: relative;
        content: '';
        border-radius: 100%;
        height: 5px;
        width: 5px;
        top: 2px;
        // left: 5px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
    }
}
    font-weight: 300;
    gap:0.1%;
    cursor: pointer;
    z-index:1000;
    padding:0.1em 0.54rem;
    display: flex;
    // flex-wrap: wrap;
}

input[type="radio"]{
    visibility: hidden;
    height: 1rem;
    width: 1rem;
    z-index: 90;
    &:hover + label{
        color:  #444;
    }
    &:checked + label{
        color: rgb(27, 214, 10);
        transition: color .8s ease;
    }
    &:checked ~ .ck {
        border: 2.3px solid rgb(27, 214, 10);
        ::before{
            background: #0DFF92;
        }
    }
    
}
`

export default RADIO;