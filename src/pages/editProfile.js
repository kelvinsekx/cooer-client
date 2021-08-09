import React, {useEffect, useState} from "react"
import auth from "./../helpers/auth.helper"
import {READ, UPDATE} from "./../apis/user/api-user"

import EDITPROFILE_COMPONENT from "../components/editProfile/main";
import TxtLoading from "./../components/loading/txtIsLoading"

const EDIT = (props) => {
    const {match} = props
    const {location: {state: {state}}} = props
    const [user, setUser] = useState(state);
    const [photo, setPhoto] = useState("")

    const handleChange = (e)=> {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        const jwt = auth.isAuthenticated()    
        let userData = new FormData()    
        user.name && userData.append('name', user.name)    
        user.telephone && userData.append('telephone', user.telephone)    
        user.bio && userData.append('bio', user.bio)    
        photo && userData.append('photo', photo) 
        user.anonymousname && userData.append('anonymousname', user.anonymousname)    
        UPDATE( match.params.userId, jwt.token, userData).then((data) => {      
            if (data && data.error) { 
                console.log(data.error)       
                setUser({...data, error: data.error})      
            } else {
                //console.log(data)       
                setUser({...data, redirectToProfile:true})      
            }    
    })}

    return (user !== null) ? <EDITPROFILE_COMPONENT
            fileHandler= {
                (e)=>{
                    setPhoto(e.target.files[0])
                }
            }
            handleChange = {handleChange} 
            user = {user}
            photo = {photo}
            handleSubmit = {handleSubmit}
        /> : <TxtLoading />
}

export default EDIT;