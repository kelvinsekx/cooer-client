import React, {useEffect, useState} from "react";
import auth from "../helpers/auth.helper"
import {getStateFromProps} from "./../helpers/react.helpers"
import {Redirect} from "react-router-dom"
import {READ, FOLLOW, UNFOLLOW} from "./../apis/user/api-user";
import {LISTBYUSER} from "./../apis/gist/api-gist";

import ProfileHeader from "./profileHeader"
import TxtLoading from "./../components/loading/txtIsLoading"

const PROFILE = (props)=> {
    const prevState = getStateFromProps(props.location, "user");

    const {match} = props
    const [user, setUser] = useState(prevState);
    const [coos, setCoos] = useState(null)
    const [redirectToSignin, setRedirectToSignin] = useState(false);

    useEffect(()=> {
        let isMounted = true;

        const abortController = new AbortController;
        const signal = abortController.signal;
        const jwt = auth.isAuthenticated()

        READ(`name _id join
        username
        bio
        followers{
          length
          details{
            name
            _id
            username
          }
        }
        following{
            length
            details{
                name
                _id
                username
              }
          }
        photo{
          data
        }
        `,{userId: match.params.userId}, {token: jwt.token}, signal).then(data => {
            if (data && data.error){
                console.log(data.error)
                setRedirectToSignin(true)
            }else {
               if( !isMounted) return;
                const {data: {person}} = data
                const r = {
                    _id : person._id,
                    name: person.name,
                    bio: person.bio,
                    username: person.username,
                    followers: person.followers.details,
                    followersLength : person.followers.length,
                    following: person.following.details,
                    followingLength: person.following.length,
                    photo: person.photo.data,
                    join: person.join
                }
                setUser(r)
            }
        });

        LISTBYUSER(match.params.userId, signal,
            { token: jwt.token}).then((res) => {    
            if (res.error) {      
                console.log(res.error)    
            } else {     
                setCoos(res);   
            }    
        }).then(()=>setSt(false))

        return function cleanup () {
            abortController.abort()
            isMounted = false;
        }
    }, [match.params.userId])

    //console.log(user) 
    if(redirectToSignin) {
        return <Redirect to="/?=pleaseSignin" />
    }

    let handleFollow = function(){
        const jwt = auth.isAuthenticated()
        let fAPI;
        if(user.followers.some(e=>e._id == jwt.user._id)){
            fAPI = UNFOLLOW
        }else{
            fAPI = FOLLOW
        }
        fAPI({userId: jwt.user.username}, {token: auth.isAuthenticated().token}, user._id, jwt.user._id).then(data => {
            if (data.error){
                console.log(data.error)
                setUser({...user, error: data.error})
                console.log(user.following.length, user.following)
            }else {
                console.log(data)
                setUser({...user, ...data, followersLength: data.followers.length, followingLength: data.following.length})
            }
        })
    };

    let loadCoos = (user, signal) => { 
        LISTBYUSER(user.username, signal,
            { token: auth.isAuthenticated().token}).then((data) => {    
            if (data.error) {      
                console.log(data.error)    
            } else {   
                //console.log(data) ;  
                return setUser({...user, coos: data});    
            }    
        })
    }

    

    return (
        <>
            {(user !== null) ?
            (<div>
                <ProfileHeader 
                    getCoos = {loadCoos}
                    follow={handleFollow}
                    coos={coos}
                    user={user} 
                    jwt={auth.isAuthenticated()}
                    profileImage={`${user.photo}?${new Date().getTime()}`}
                />
            </div>) : <TxtLoading /> }
        </>
    )
}
export default PROFILE;