import React, {useState} from "react";
import {StyledLogs as Styles} from "./logs.styled"
import Footer from "./footer";
import { SIGNIN } from "../../apis/api-auth"

import auth from "../../helpers/auth.helper"
import {SekxReactAlert} from "../../helpers/react.helpers"
import {Redirect} from "react-router-dom"

import { Button as GrommetButton, Card } from 'grommet';

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
    <Card 
        id="logs">
        <form onSubmit={(e)=>e.preventDefault()}>
        {values.error && 
        <SekxReactAlert>{values.error}</SekxReactAlert>}
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
             <GrommetButton 
                    type="submit" 
                    label="Log in"
                    onClick={submit}>
                </GrommetButton>
        </form>
        <Footer />
    </Card>
</Styles>
)};

export default LogForm