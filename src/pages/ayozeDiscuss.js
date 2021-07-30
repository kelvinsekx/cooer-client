import React, { useEffect, useState} from "react"
import {READ} from "../apis/ayoze/ayoze-api"
import auth from "../helpers/auth.helper"
import $ from "../helpers/gen.helpers"
import AyozeChat from "./../components/ayoze/chats";

const AYOZEDISCUSS = ({match}) => {
    const [gists, setGists] = useState({})

    useEffect(()=> {
        let credentials = auth.isAuthenticated().token,
            abortController = new AbortController(),
            params= match.params.gossipId;
        READ(params, credentials, abortController.signal).then(data => {
            if (data.error){
                $.log(data.error)
            } else {
                setGists(data)
            }
        });

        return function clean(){
            return abortController.abort()
        }
    }, [gists]);

    const addToGists = (newGist)=> {
       const newGists = {...gists, newGist}
       setGists(newGists)
    }

    return (
        <div>
            <h1>{gists.text}</h1>
            <p>{(new Date(gists.created).toLocaleTimeString())}</p>
            <AyozeChat 
                chats={gists.reactions} 
                id={gists._id} 
                addToGists={addToGists}/>
        </div>
    )
};

export default AYOZEDISCUSS;