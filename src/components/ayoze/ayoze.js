import React, {useState, useEffect} from "react";
import {CREATE, LISTNEWFEEDS, REACT} from "./../../apis/ayoze/ayoze-api"
import auth from "./../../helpers/auth.helper"
import $ from "./../../helpers/gen.helpers"
import {Link} from "react-router-dom";
import styled from "styled-components";

const AYOZE = ()=>  {
    const [list, setList] = useState([]);
    const [reactionId, setReactionId] = useState("")
    const [values, setValue] = useState({
        txt: "",
        error: ""
    })

    const handleChange = (e)=> {
        setValue({txt: e.target.value})
    }

    useEffect(()=> {
        let params = auth.isAuthenticated().user.username,
            credentials = auth.isAuthenticated().token,
            abortController = new AbortController()
        LISTNEWFEEDS(params, credentials, abortController.signal).then(data => {
            if(data.error){
                console.log(data.error);
            }else {
                //console.log(data)
                setList(data)
            }
        })

        return function cleanup(){
            abortController.abort()
        }
    }, []) 
    
    const addGist = (newItem) => {
        const updatedGists = [...list];
        updatedGists.unshift(newItem);
        setList(updatedGists);
    }

    const HANDLESUBMIT = () => {
        let params = auth.isAuthenticated().user.username,
            credentials = auth.isAuthenticated().token,
            postData = new FormData();
                postData.append("text", values.txt);
                postData.append("photo", "");
            
        CREATE(params, credentials, postData).then(data =>{
            if (data.error){
                console.log(data.error)
                setValue({...values,error: data.error})
            } else {
                setValue({...values, txt: ''});
                setReactionId(data._id)
                addGist(data)
                return data._id;
            }
        }).then(ayozeId => {
            const firstComment = prompt("write something your audience can engage with when they first reach your ayoze")
            if (firstComment){
                return REACT(auth.isAuthenticated().user._id, credentials, ayozeId, {text: firstComment});
            }
        }).then(data => {
            if (data.error) {
                console.log(data.error)
            }
        })
    }
    return (
        <Styles>
            <input name="txt" onChange={handleChange} value={values.txt}/> <button onClick={HANDLESUBMIT}>start</button>


            {list.map((l, i) => 
                <div key={i+l.text.substr(0,3)}>
                    <Link to={`/ayoze/${$.getLink(l.text)}/${l._id}`}>{l.text}</Link>
                </div>)
            }
        </Styles>
    )
}

const Styles = styled.div`
a{
    text-decoration: none;
    font-size: 80%;
    color: rgb(15, 116, 32);
}
`


export default AYOZE;