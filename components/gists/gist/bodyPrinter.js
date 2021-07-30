import React from "react";
import styled from "styled-components"

function printerProcess (text) {
    let PATTERN, TM, LINK, LM;
    PATTERN = /^@(\w+)/g;
    LINK = /https?:\/\/(\w+):?(\w+)(\/(\w+))+/g;

    TM = PATTERN.exec(text);
    LM = LINK.exec(text)
    if (TM) {
        text = text.replaceAll(PATTERN, `<a href="/profile/${TM[1]}">${TM[0]}</a>`)
    }
    if(LM) {
        text = text.replaceAll(LINK, `<a href="${LM[0]}">${LM[0]}</a>`)
    }
    return text;
}
const PRINTER = ({text}) => {
    text = printerProcess(text)
    return (
        <Styles>
            <div 
                dangerouslySetInnerHTML={{__html: text}} 
            />
        </Styles>
    )
};

const Styles = styled.div`
    a {
        text-decoration: none;
        color: rgb(15, 116, 32);
        font-size: 97%;
    }
`
export default PRINTER;