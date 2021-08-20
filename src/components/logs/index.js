import React, {useState} from "react";
import styled from "styled-components"
import Footer from "./footer";
import { SIGNIN } from "../../apis/api-auth"

import auth from "../../helpers/auth.helper"
import {SekxReactAlert} from "../../helpers/react.helpers"
import {Redirect} from "react-router-dom"
import { 
    Button as GrommetButton, 
    Card,
    TextInput } from 'grommet';

const logInfo = [{
    placeholder: "email: example@gmail.com",
    name: "user_email",
    type: "text"
}, {
    placeholder: "password",
    name: "password",
}]

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
            {logInfo.map((e, i)=> <TextInput 
                placeholder={e.placeholder}
                type={e.type || "password"}
                name={e.name}
                key={i}
                onChange={handleChange(e.name)}
            />)}
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

const Styles = styled.div`
display: flex;
justify-content: center;
#logs {
    padding: 2em;
    border: 0.6px solid #666;
form{
    display: flex;
    flex-direction: column;
    input, button {
        padding: 0 2rem;
        min-height: 3rem;
        font-size: 1.3rem;
        border-radius: 0.31rem;
        margin: 0.4em 0;
    }
    input {
        color: grey;
       
    }
    button{
        color: white;
        background-color: #0e7713;
        border:none;
    }
}
}

// mobile screen
@media (max-width: 900px){
   #logs{
       padding:1em;
    form{
        input, button {
            padding: 0 1rem;
            min-height: 2.4rem;
            font-size: 1.07rem;
        }
    }
   }
}
`

export default LogForm
