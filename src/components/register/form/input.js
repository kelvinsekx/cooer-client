import React, {useState} from "react";
import styled from "styled-components"

const INPUT = ({placeholder, type, name, value,handleChange, w, readOnly, minLength, id, list})=>
{
    const [recoll, setRecoll] = useState(false)
    placeholder = placeholder ? placeholder : "";
    type = type ? type : "text";
    readOnly = readOnly ? true : false;
    minLength = minLength ? minLength : null;

    function handleFocus (e) {
        return setRecoll(true)
    }


    function handleBlur (e) {
        return setRecoll(false)
    }

return (
<Styles w={w} tr={recoll}>
    <label htmlFor={placeholder}>
        <span>{placeholder}</span>
        <input 
            readOnly= {readOnly}
            placeholder={placeholder} 
            type={type}
            name={name}
            minLength={minLength}
            id={id}
            value={value}
            onChange={handleChange(name)}
            onInput={handleFocus}
            list={list}
            onBlur={handleBlur}>
        </input>
    </label>
</Styles>
)};

export let Styles = styled.div`
width: ${({w})=> '90%'};
border-radius: 5px;
label {
    span{
        display:inline-block;
        font-size: 60%;
        color: #111;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease-in;
        transition-delay: 0.7s;
        ${
            (props) => props.tr && css`
            opacity: 1; 
            visibility:visible;               
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

export default INPUT;