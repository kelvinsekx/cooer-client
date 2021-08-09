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
                    <div style={{ flexGrow: 1}} className="lg">
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
    width: 99.5vw;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    .lg{
        padding-top: 2rem;
    }
}
@media (min-width: 900px){
    div#main{
        margin-top:0px;
        flex-direction: row;
        height: 99vh;
        .lg{
            padding-top: 0rem;
        }
    }
}

`

export default HOME;
