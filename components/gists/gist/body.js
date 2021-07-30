import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import { FiHeart, FiCompass, FiCopy, FiThumbsUp
} from "react-icons/fi";
import { BsHeartFill} from "react-icons/bs"

import BodyPrinter from "./bodyPrinter";

const BODY = ({info, actions, gist})=> {
    return <Styles>
    <div id="gistBody">
        <div className="gistText">
            <BodyPrinter text={info.text} /> 
        </div>
        <div className="gistInfo">
            <div className="gistActors">
                <div onClick={actions.clickLike}>
                    <span>{info.likes.length}</span>
                    <span style={{top: "2.3px", fontSize: "77%"}}>
                        {actions.like ? <BsHeartFill style={{color: "red"}}/>: <FiHeart />}
                    </span>
                </div>
                <div>
                    <span>
                        {info.commentNumber}
                    </span>
                    <span style={{top: "2px", fontSize: "90%"}}>
                        <Link 
                            to={{
                                pathname:`${info.link}`,
                                state: {gist}
                            }}><FiCompass /></Link>
                    </span>
                </div>
    
                <div>
                    <span>
                        68
                    </span>
                    <span>
                    <FiCopy />
                    </span>
                </div>
    
                <div>
                    <span style={{fontSize: '60%', backgroundColor: "rgba(2, 141, 12, 0.8)", borderRadius: "100%", color: "white",minHeight: "1rem", minWidth: "1rem", fontWeight: "bold", display:"inline-block"}}>
                        6k
                    </span>
                    <span style={{position: "relative", bottom: "0.5em"}}>
                        savage
                    </span>
                </div>
            </div>
        </div>
    </div>
    </Styles>
}


const Styles = styled.div`
flex-grow: 1;
div#gistBody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.45em;
    div.gistText{
        font-size:97%;
    }
    div.gistInfo{
        display: flex;
        font-size: 1.2rem;
        div.gistActors{
            flex-basis: 20rem;
            display: flex;
            justify-content: space-between;
            color: #444;
            div{
                z-index: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-width: 2rem;
                span{
                    font-size: 94%;
                    display: inline-block;
                    padding-left: 0.1em;
                    cursor: pointer;
                    &:nth-child(1){
                        font-size: 90%;
                    }
                    &:nth-child(2){
                        position: relative;
                        top: 0.15em;
                        font-size: 80%;
                    }
                }
            }
        }
    }
}

@media (max-width: 540px){
    div#gistBody {
        div.gistInfo{
            div.gistActors{
                flex-basis: 21rem;
            }
        }
    }
}

@media (min-width: 900px) {
    div#gistBody {
        div.gistInfo{
            div.gistActors{
                flex-basis: 26rem;
            }
        }
    }
}

a{
    text-decoration:none;
    color: inherit;
}
`

export default BODY;