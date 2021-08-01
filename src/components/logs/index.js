import React, {useState} from "react";
import {StyledLogs as Styles} from "./logs.styled"
import Footer from "./footer";
import { SIGNIN } from "../../apis/api-auth"

import auth from "../../helpers/auth.helper"
import {Redirect} from "react-router-dom"

const LogForm = (props)=>{
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    });

    function handleChange(name){
        return function(event){
            // console.log(values)
            return setValues({...values, [name]: event.target.value})
        }
    }

    function submit () {
        console.log(props.location)
        const USER = {
            email: values.user_email || undefined,
            password: values.password || undefined
        }

        SIGNIN(USER).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                auth.authenticate(data, ()=> {
                    setValues({...values, error: "",redirectToReferrer: true})
                })
            }
        })
    }

    const {from} = {
        from: {pathname: "/home"}
    }
    const {redirectToReferrer} = values;
    if (redirectToReferrer) {
        return <Redirect to={from} />
    }
return (
<Styles>
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
        {values.error && <div style={{color: "white", backgroundColor: "rgba(197, 12, 0, 0.45)", padding: "0.3em 1em", fontWeight: "600"}}>{values.error}</div>}
            <input 
                placeholder="email: example@gmail.com" 
                type="text"
                name="user_email"
                onChange={handleChange("user_email")}
            />
            <input 
                placeholder="password" 
                type="password"
                name="password"
                onChange={handleChange("password")}
            />
            <button type="submit" onClick={submit}>Log In</button>
        </form>
        <Footer />
    </div>
</Styles>
)};

export default LogForm