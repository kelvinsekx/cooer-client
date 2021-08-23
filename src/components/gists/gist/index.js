import React from "react";
import styled from "styled-components"
import auth from "../../../helpers/auth.helper"
import { LIKE, UNLIKE } from "../../../apis/gist/api-gist";

import DPHEADER from "./Dpheader";
import BODY from "./body"

import $ from "./../../../helpers/gen.helpers"


const {useState} = React;
const GIST = ({payload, status}) => {
    let jwt = auth.isAuthenticated();
    const [gist, setGist] = useState({ like: checkIfLiked(payload.likes), likes: payload.likes})


    function checkIfLiked(likes) {
        if(likes == undefined)return;
        let match = likes.indexOf(jwt.user._id) !== -1;
        return match
    }

    const clickLike = () => {
        let callApi = gist.like ? UNLIKE : LIKE;
        callApi({userId: jwt.user._id}, {token: jwt.token}, payload._id).then(data => {
            if (data.error){
                console.log(data.error);
            }else {
                setGist({ like: !gist.like, likes: data.likes})
            }
        })
    }

    function replacePostedBy(gist, v){
        if (payload.postedBy !== undefined)return payload.postedBy[v]
        else return "remi"
    }

    let postedBy = replacePostedBy(payload, 'name'),
     created = payload.created,
     text = payload.text,
     pigeon = replacePostedBy(payload, 'username'),
     commentNumber = payload.comments.length,
     like= gist.like
    ;
    let someText = text.substr(0, 20)
    const quotesLink = $.getLink(someText)
    let link = `/${pigeon}/${quotesLink}/${status}/${payload._id}`

return (
    <Styles>
        <div className="h--wrapper">
            <div id="aside">
                <div id="userAvatar"><img src={`${payload.postedBy.photo}?${new Date().getTime()}`} /></div>
            </div>
            <div id="rest">
                <DPHEADER info={{ postedBy, created, pigeon}}/>
                <div className="bd">
                    <BODY 
                        info={{text, likes: gist.likes, commentNumber,  pigeon, link,
                    id: payload._id}} 
                    actions={{clickLike, like}} 
                    gist={payload}/>
                </div>
            </div>
        </div>
    </Styles>
)}

const Styles = styled.div`
border: 0.05rem solid rgba(0, 0, 0, 0.2);
border-radius: 2px;
display: flex;
padding: 0.6em;
margin: 1em 0;
width:95%;
div.h--wrapper {
    flex-grow: 1;
    display: flex;
    align-items: top;
    div#aside {
        width:19%;
        display:flex;
        justify-content: center;
        div#userAvatar {
            display: inline-block;
            align-self: center;
            margin-top: -2rem;
            width: 2.7rem;
            height: 2.7rem;
            border-radius: 100%;
            box-shadow: 0 0 0 1.4px #f2f2f2;
            overflow: hidden;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    div#rest {
        flex-grow: 1;
    }
}

@media (min-width: 600px) {
    div.h--wrapper {
        div#aside {
            width:17%;
            align-items: flex-start;
            justify-content: center;
            div#userAvatar {
                width: 3rem;
                height: 3rem;
            }
        }
    }   
}
`

export default GIST;
