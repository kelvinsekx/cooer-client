import React, {useState} from "react";
import styled from "styled-components"
import TextArea from "./../components/others/cooerTextArea"
import Gist from "./../components/gists/gist"
import auth from "../helpers/auth.helper";

import {Link} from "react-router-dom"
import PsuedoAds from "./../components/others/PsuedoAds"
import AwesomeGuysToFollow from "./../components/toFollowSuggestion/toFollow"
import TxtLoading from "./../components/loading/txtIsLoading"

import {LISTNEWFEEDS, CREATE} from "../apis/gist/api-gist" 
import {LIST,READ} from "../apis/user/api-user"

const MUHA = (props) =>{
    const [gists, setGists] = useState(null);
    const [members, setMembers] = useState(null);
    const [isFollowing, setIsFollowing] = useState(1)

    const jwt = auth.isAuthenticated();

    React.useEffect(()=> {
        const abortController = new AbortController();
        const signal = abortController.signal;
        let isMounted = true;
        
        READ(`
            following{
                length
                details {
                    name
                }
            }
        `,{userId: jwt.user.username}, {token: jwt.token}, signal).then(data => {
            if (data && data.error){
                console.log(data.error)
            }else {
                const {data: {person: {following}}} = data;
                if(!isMounted)return;
                setIsFollowing(following.length)
            }
        });

        LISTNEWFEEDS({userId: jwt.user.username}, 
            {token: jwt.token}, signal).then(data=> {
                if (data.error) {
                    console.log(data.error)
                } else {
                    if(!isMounted)return;
                    //console.log(data)
                    setGists(data)
                }
        });

        LIST(`query {allPeople(limit: 3, random: true){
            username
            photo 
            bio
        }}`).then(data=> {
            if(data.error){
                console.log(data.error)
            }else {
                if(!isMounted)return;
		        const {data: {allPeople}} = data
                   setMembers(allPeople)
            }
        })

        return function cleanup(){
            abortController.abort()
            isMounted = false;
        }
    }, [])

    const addGist = (gist) => {
        const updatedGists = [...gists];
        updatedGists.unshift(gist);
        return updatedGists;
    }

    const clickPost = (text, photo) => {
        let gistData = new FormData();
        gistData.append("text", text)
        gistData.append("photo", photo)
        CREATE({userId: jwt.user.username}, 
            {token: jwt.token}, gistData).then(data => {
                if (data.error) {
                    console.log(data.error)
                    // setValues({...values, error: data.error})
                } else {
                    const newData = addGist(data);
                    setGists([...newData])
                }
        })
    }

    return (
        <Styles>
        <div className="muha">
            <div className="feed">
                <div>
                    <TextArea 
                        clickPost={clickPost}
                        jwt = {jwt} />
                </div>
                {(isFollowing < 1) ? 
                    <AwesomeGuysToFollow /> :
                    (gists !== null) ? 
                    gists.map((gist, i)=> 
                    <div style={{paddingTop: "10px"}}>
                    <Gist 
                        payload={gist}
                        status={"status"} 
                        key={i}
                        link={`hey`} />
                        </div>) : <TxtLoading />
                }

            </div>
            <div>
                <PsuedoAds 
                    header={`Suggested Followers`}
                    body={(members !== null ) ? members.map((member, index)=> {
                        return <div className="lilintro" key={index}>
                        <div className="dp"><img src={`${member.photo}?${new Date().getTime()}`}/></div>
                        <div>
                            <Link to={`/profile/${member.username}`}>
                            <p className="un">{member.username}</p>
                            <p className='bio'>{member.bio}</p>
                            </Link>
                        </div>
                    </div>
                    }) : <TxtLoading />}
                />
            </div>
        </div>
        </Styles>
    )
}

const Styles = styled.div`
div.muha{
    display: grid;
    grid-template-columns: 1fr;
    .lilintro{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 0.1em;
        padding: 0.5rem 0;
        .un{
            font-size: 85%;
        }
        .bio{
            color: #666;
            font-size:70%;
        }
        .dp {
            //border: 1px solid red;
            width: 3rem;
            height: auto;
            border-radius: 100%;
            overflow: hidden;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
}
@media (min-width: 900px) {
    border: 2.45px solid rgba(10, 322, 34, 0.1);
    div.muha{
        grid-template-columns: 1.5fr 1fr;
        div.feed{
            border-right: 0.10rem solid rgba(0, 0, 0, 0.2);
        }
        .lilintro{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 0.1em;
            padding: 0.5rem 0;
            .un{
                font-size: 85%;
            }
            .bio{
                color: #666;
                font-size:70%;
            }
            .dp {
                //border: 1px solid red;
                width: 2rem;
                height: 2rem;
                border-radius: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
`
export default MUHA;
