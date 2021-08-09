import React from "react";
import {
    Card,
    Button as GrommetButton,} from "grommet" ;
import styled from "styled-components"
import {StyledRegisterForm as Styles} from "./../components/register/form/form.styled"
import INPUT from "./../components/register/form/input"


const ForgotPassword = ()=> {
    function handleChange(name){
        return function(event){
            return console.log(name)
        }
    }
    return <StyledDiv>
    <div id="r">
    <div className="banner">
        <div>
            <div>Sure, you forgot your password ?</div>
            <div>Let's get you back in no time</div>
        </div>
    </div>
    <div className="startYourForgotPasswordJourney">
        <Card id="card">
            <form>
                <INPUT 
                    placeholder="put in your username"
                     w="90"
                    name='username'
                    handleChange={handleChange}
                />
                <INPUT 
                     placeholder="then your gmail" 
                     w="90"
                     name='Gmail'
                     handleChange={handleChange}
                />
                <GrommetButton 
                    type="submit" 
                    alignSelf="center"
                    margin="1em 0 0 0"
                    label="Let's Go"
                    onClick={handleChange}>
                </GrommetButton>
            </form>
        </Card>
    </div>
    </div>
</StyledDiv>

}
const StyledDiv = styled.div`
#r {
    display: flex;
    height: 100vh;
    //align-items: center;
    flex-direction: column;
    .banner {
        width: 100vw;
        background-color: rgba(19, 212, 106, 0.3);
        color: #222222;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 100%;
    }
    .startYourForgotPasswordJourney{
        flex-grow: 1;
        align-self: center;
        display: flex;
        justify-content: center;
        #card{
            padding: 1.5em;
            form {
                display: flex;
                flex-direction: column;
            }
        }
    }
}
@media (min-width: 900px){
    #r{
        flex-direction: row;
        .banner {
            width: 50vw;
            font-size: 180%;
        }
    }
}
`

export default ForgotPassword;