import React from "react";
import styled from "styled-components";
import HomeBanner from "../components/homeBanner"
import LogForm from "../components/logs";
import {Redirect} from "react-router-dom"

import auth from "./../helpers/auth.helper"

const HOME = () =>  
<Styles>
    <div id="main">
        <HomeBanner />
        <div style={{ flexGrow: 1}}>
            <LogForm />
        </div>
    </div>
</Styles>;

const Styles = styled.div`
div#main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
}
// if the screen is larger than a tablet
@media (min-width: 900px){
    div#main{
        flex-direction: row;
        height: 100vh;
	    gap: 0em;
    }
}
`

export const hm = ()=> {
	const aut = auth.isAuthenticated()
	if(aut){
	 return <Redirect to="/home" />
	}
	return <Redirect to ="/login" />
}

export default HOME;
