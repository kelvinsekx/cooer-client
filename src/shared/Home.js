import React from "react";
import styled from "styled-components";
import HomeBanner from "../components/homeBanner"
import LogForm from "../components/logs";
import {Redirect} from "react-router-dom"

import auth from "./../helpers/auth.helper"

const HOME = () => {
        return (
            <Styles>
                <div id="main">
                    <HomeBanner />
                    <div style={{ flexGrow: 1}}>
                        <LogForm />
                    </div>
                </div>
            </Styles>
        )

}

export const hm = (props)=> {
	const aut = auth.isAuthenticated()
	if(aut){
	 return <Redirect to="/home" />
	}
	return <Redirect to ="/login" />
}

const Styles = styled.div`

div#main{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    gap: 1em;
}
@media (min-width: 900px){
    div#main{
        flex-direction: row;
        height: 100vh;
	gap: 0em;
    }
}

`

export default HOME;
