import React from "react";
import Gist from "../components/gists/gist/index"

import {COMMENT, LIST_A_FEED} from "../apis/gist/api-gist"
import auth from "../helpers/auth.helper"
import { getStateFromProps } from "../helpers/react.helpers";
import TxtLoading from "../components/loading/txtIsLoading"

import TABS from "../components/comment/commentTabs"

const {useState, useEffect} = React;
const Status = (props)=> {
    const jwt = auth.isAuthenticated();
    const prevState = getStateFromProps(props.location, "gist");
    
    const [gistInfo, setGistInfo] = useState(prevState)

    useEffect(()=> {

        const abort = new AbortController()
        const signal = abort.signal
        LIST_A_FEED(props.match.params.commentId, signal).then(res => {
            if(res.error){
                console.log(res.error);
            }else {
                const [data] = res;
                setGistInfo(data)
            }
        })

        return function cleanUp(){
            abort.abort()
        }
    }, [])


    const doComment = (comm, callback)=> {
        return COMMENT({userId: jwt.user._id}, {token: jwt.token}, gistInfo._id, {text: comm}).then(res => {
             if (res.error) {
                 console.log(res.error)
             }else {
                callback("")
                console.log(res)
                setGistInfo(res);
             }
         }); 
    }

    return (
        (gistInfo !== null ) ?
        (<div>
         <Gist 
            payload ={gistInfo}
            status="status" />
         <hr />
            <TABS 
                comment = {doComment}
            />
             <div>
                 {gistInfo.comments.map((com, index)=>
                    <Gist 
                        payload={com}
                         key={index}
                         status="comments" />)}
             </div>
        </div>) :
        <TxtLoading />
    )
};

export default Status;