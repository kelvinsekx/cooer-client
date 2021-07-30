import React, {useState} from "react";
import {StyledRegisterForm as Styles} from "./form.styled"

import {Redirect, Link} from "react-router-dom"
import INPUT from "./input";
import RADIO  from "./radioInput"

import {CREATE} from "../../../apis/user/api-user"


const REGISTERFORM = ()=>
{
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: '',
        anonymousName: "",
        telephone: "",
        password: '',
        securityQuestion: "",
        securityAnswer: "",
        gender: "",
        error: '',
        open: false
    });

    function handleChange(name){
        return function(event){
            console.log(event.target.value)
            return setValues({...values, [name]: event.target.value})
        }
    }

    function submit () {
        // console.log(props.location)
        const USER = {
            name: values.name || undefined,
            username: values.username || undefined,
            email: values.email || undefined,
            telephone: values.telephone || undefined,
            password: values.password || undefined,
            gender: values.gender || undefined,
        }
        console.log(USER)

        CREATE(USER).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, error: "", open: true})
            }
        })
    }

    const {from} = {
        from: {pathname: "/"}
    }
    const {open} = values;
    if (open) {
        return <Redirect to={from} />
    }
return (
<Styles>
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div id='fieldset'>
                <div>
                    <legend>Join the new world, it's quick</legend>
                </div>
                <div id="formContent">
                    <div className="ytr">
                        <INPUT 
                            placeholder="name"
                            w="45"
                            name='name'
                            handleChange={handleChange}
                        />
                        <INPUT 
                            placeholder="username" w="40"
                            name='username'
                            handleChange={handleChange}
                        /> 
                    </div>
                    <div className="ytr">
                        <INPUT 
                            placeholder="email" 
                            w="60"
                            name='email'
                            handleChange={handleChange}
                        /> 
                    </div>
                    <div className="ytr">
                        <INPUT 
                            placeholder="telephone" w="42" 
                            type="tel"
                            name='telephone' 
                            handleChange={handleChange}
                        />
                        <INPUT
                            placeholder="password" w="42" 
                            type="password" minLength="8"
                            name='password'
                            handleChange={handleChange}
                        /> 
                    </div>
                    
                    <div className="gendo">
                        Gender
                        <div>
                            <RADIO 
                                value="Female"  
                                ID="female" 
                                handleChange={handleChange}
                                name="gender"
                            />
                            <RADIO 
                                ID="male" 
                                value="Male" 
                                handleChange={handleChange}
                                name="gender"
                            />
                            <RADIO 
                                ID="custom" 
                                value="Custom" 
                                handleChange={handleChange}
                                name="gender"
                            />
                        </div>
                    </div>
                </div>
                {values.error && <div style={{color: "white", backgroundColor: "rgba(197, 12, 0, 0.45)", padding: "0.3em 1em", fontWeight: "600"}}>{values.error}</div>}
                <button 
                    type="submit" 
                    onClick={submit}>Create Account
                </button>
            </div>
        </form>
    </div>
    <div>or rather <Link to="/">Log In</Link></div>
</Styles>
)
}

export default REGISTERFORM;