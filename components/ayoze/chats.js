import React, {useState} from 'react';
import styled from "styled-components"
import auth from "./../../helpers/auth.helper"
import { REACT} from "./../../apis/ayoze/ayoze-api"

import $ from "../../helpers/gen.helpers"

const ID = auth.isAuthenticated() && auth.isAuthenticated().user._id;

const CHATS = ({chats, id, addToGists})=> {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("")

    const handleChange = (e)=> {
        setText(e.target.value)
    }

    const betterReact = ()=> {
        REACT(
            auth.isAuthenticated().user._id, 
            auth.isAuthenticated().token, id, 
            {text: text}).then(data => addToGists(data))
    }

    if (typeof chats == "undefined"){
        chats = []
    }
    return (
        <div>
        {chats.length > 0 ? 
            <div>
                {chats.map((chat, i) => <div key={i}><StyledChatter id={chat.postedBy}>{chat.text}</StyledChatter></div>)}
            </div> : 
            <StartAyoze />
        }
        <StyledWrite toggle={toggle}>
            <div id="btn">
                {toggle ?
                    <button onClick={()=> {
                        betterReact()
                        setToggle(!toggle)}
                    }>send</button>: 
                    <button onClick={()=> setToggle(!toggle)}>write</button>
                }
            </div>
            <div>
                <textarea
                    value={text}
                    onChange={handleChange} />
            </div>
        </StyledWrite>
        </div>
    )
};

const StyledChatter = styled.span`
 ${({id})=> {
    if (id === ID ){
        return `
        display: inline-block;
        background-color: white;
        box-shadow: 2px 1px 2px 1px #666;
        padding: 0.1em 1em 0.2em 0.11em;
        border-radius: 3px;
        font-size: 1.2em;
        min-height:2rem;
    `
    } else {
        return `
        display: inline-block;
        background-color: red;
        box-shadow: 2px 1px 2px 1px #666;
        padding: 0.1em 1em 0.2em 0.11em;
        border-radius: 3px;
        font-size: 1.2em;
        min-height:2rem;
    `
    }
}}
`

const StyledWrite = styled.div`
position: fixed;
bottom: 0;
right: 0.3rem;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
cursor:pointer;
div#btn {
    width: 7rem;
    text-align: center;
    margin-left: auto;
    background-color: rgba(99, 292, 186, 0.8);
    button {
        background-color: transparent;
        border: none;
        font-size: 1.3rem;
        font-weight:bold;
        cursor: inherit;
    }
}
textarea{ 
    width: 100%;
    ${
    ({toggle})=> {
        if(toggle) {
            return `
                display: block;`
        }else {
            return `
                visibility: hidden;
                display: none;`
        }
    }
}
}

`

function StartAyoze () {
    return (
        <StylesS>Start an engaging discuss...</StylesS>
    )
}
const StylesS = styled.div`
        color: black;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        margin-top: 2rem;`

export default CHATS;