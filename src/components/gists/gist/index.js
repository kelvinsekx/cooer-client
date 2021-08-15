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
                <span id="userAvatar"><img src={`${payload.postedBy.photo}?${new Date().getTime()}`} /></span>
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
border-top: 0.05rem solid rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
min-height: 6rem;
padding: 0.3em 0;
div.h--wrapper {
    flex-grow: 1;
    display: flex;
    align-items: top;
    div#aside {
        width:19%;
        display:flex;
        justify-content: center;
        span#userAvatar {
            display: inline-block;
            align-self: center;
            width: 3.4rem;
            height: 3.4rem;
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
        width:80%;
    }
}

@media (min-width: 600px) {
    div.h--wrapper {
        div#aside {
            width:17%;
            justify-content: center;
            span#userAvatar {
                width: 3.5rem;
                height: 3.5rem
            }
        }
    }   
}
`

export default GIST;
