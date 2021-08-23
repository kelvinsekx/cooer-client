import React from "react";
import styled from "styled-components"

export const getStateFromProps = (location, payload)=> {
    if(location.state !== undefined) {
       return payload =location.state[payload];
    }else {
        return payload = null
    };
};


const {useState} = React;
export const SekxReactAlert = ({children, info, styles={}})=> <StyledDiv>
    <div 
        style={{
        color: styles.color || "white", 
        padding: styles.padding || "0.3em 1em", 
        fontWeight: styles.padding || "600"}}
    >
        {children || info}
    </div>
</StyledDiv>

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
background-color:  rgba(197, 12, 0, 0.45); 
div.close{
//border: 1px solid red;
padding:0 0.4em;
cursor: pointer;
//quickky
font-size: 120%;
position relative;
top: 0.2rem;
}
`
