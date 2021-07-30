import React, {useState} from "react";
import {StyledInput as Styles} from "./form.styled";


const INPUT = ({placeholder, type, name, value,handleChange, w, readOnly, minLength, id, list})=>
{
    const [recoll, setRecoll] = useState(false)
    placeholder = placeholder ? placeholder : "";
    type = type ? type : "text";
    readOnly = readOnly ? true : false;
    minLength = minLength ? minLength : null;

    function handleFocus (e) {
        console.log(e.target.value)
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

export default INPUT;