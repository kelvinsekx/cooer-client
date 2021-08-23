import React from "react";
import styled from "styled-components";

//const DAY = ["Mon", "Tuesd..", "Wednes..", "Thurs", "Fri..", "Satur.."];


const JOINED_DAY = ({date})=> {
    // const day = new Date(date).getDay()
    const month = new Date(date).toLocaleString('default', {month: "short"})
    const year = new Date(date).getUTCFullYear()
return <Styles>
    <small> {month}, {year} </small>
</Styles>;
}

const Styles = styled.span`
    color: black;
    font-weight: bold;
`

export default JOINED_DAY;