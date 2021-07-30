import React from "react";
import styled from "styled-components";

const PSUEDOADS = ({header, body}) => {
    return (
        <Styles>
        <div id="psuedo">
            <header>{header}</header>
            <div>
                {body}
            </div>
        </div>
        </Styles>
    )
}

const Styles = styled.div`
border-radius: 5%;
width: 78%;
padding: 1rem 0;
box-shadow: 2px 4px 5px 4px rgba(150, 140, 140, 0.323);
margin: 1rem auto;
display: flex;
justify-content: center;
    a {
        text-decoration: none;
        color:rgb(40, 136, 76);
    }
    div#psuedo {
        width: 88%;
        background-color: white;
        header {
            font-size: 1.25rem;
            text-align: right;
        }
    }
@media (max-width: 900px) {
    visibility: none;
    display: none;
}
`

export default PSUEDOADS;