import React, {useState} from "react";
import {StyledRegisterForm as Styles} from "./form.styled"

import {Redirect, Link} from "react-router-dom"
import INPUT from "./input";

import {CREATE} from "../../../apis/user/api-user"

import { 
    RadioButtonGroup, 
    Button as GrommetButton,
    Card,
    CardFooter,
    CardHeader, 
    CardBody} from 'grommet';

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
        gender: "Male",
        error: '',
        open: false
    });
    function handleChange(name){
        return function(event){
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
    <Card id="reg-card">
        <form onSubmit={(e)=>e.preventDefault()}>
            <div id='fieldset'>
                <CardHeader>
                    <legend>Join the new world, it's quick</legend>
                </CardHeader>
                <CardBody id="formContent">
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
                    <div>
                        <INPUT 
                            placeholder="email" 
                            w="100"
                            name='email'
                            handleChange={handleChange}
                        /> 
                    </div>
                    <div>
                        <INPUT
                            placeholder="password" w="100" 
                            type="password" minLength="8"
                            name='password'
                            handleChange={handleChange}
                        /> 
                    </div>
                    
                    <div className="gendo">
                        Gender
                        <RadioButtonGroup
                            name="gender"
                            options={['Male', 'Female', 'Custom']}
                            value={values.gender}
                            direction="row"
                            onChange={handleChange("gender")}
                    />
                    </div>
                </CardBody>
                {values.error && <div style={{color: "white", backgroundColor: "rgba(197, 12, 0, 0.45)", padding: "0.3em 1em", fontWeight: "600"}}>{values.error}</div>}
                <GrommetButton 
                    type="submit" 
                    label="Create account"
                    onClick={submit}>
                </GrommetButton>
            </div>
        </form>
        <CardFooter
        alignSelf="center">
            <p>or rather <Link to="/">Log In</Link></p>
        </CardFooter>
    </Card>
</Styles>
)
}

export default REGISTERFORM;