import React from "react";
import {Route,Switch} from "react-router-dom";
import styled from "styled-components"

import Private from "./auth/PrivateRoute";

import { NonProtectedRoutes as nRoutes, 
        protectedRoutes as pRoutes } 
from "./routes";

import Menu from "./components/menu"


const MAINROUTER = (props) =>
{
    return <div style={{fontFamily: "sans-serif", color: "#222"}}>
    <Switch>

    {nRoutes.map((route, i) => (
        <Route  key={i}
            exact
            {...route} />
    ))}

    <MAINSTYLES>
        <div id="main">
            <div className="menuMenu"><Menu /></div>
            <div className="body">
                {pRoutes.map(
                    (route, i) => (
                        <Private  
                            key={i}
                            exact
                            {...route} 
                        />
                    ))
                }
            </div>
        </div>
    </MAINSTYLES>
    </Switch>
</div> 
} 

const MAINSTYLES = styled.div`
div#main{
    display: grid;
    grid-template-columns: 1fr 4fr;
    .menuMenu{
        position: sticky;
        top: 2px;
    }
}
@media (max-width: 540px) {
    div#main{
        grid-template-rows: 
        [nav-navEnd] 90% [bodyStart-bodyEnd] 9%;
        grid-template-columns: [d] 100%;
        grid-template-areas: 
        "d"
        "d";
        .menuMenu{
            z-index: 400;
            grid-row: 2/3;
            position: sticky;
            height: 3.243rem;
            bottom: -1px;
            display: flex;
            align-items: center;
            background-color: white;
            border-top: 0.03px solid rgba(0,0,0,0.2);
            box-shadow: 0.3px 0 0.1px 0.3px rgba(150, 140, 140, 0.203);
        }
        .body {
             grid-row: 1/2;
            overflow-y: scroll;
            overflow-x: hidden;
            margin-bottom: 3rem;
        }
    }
}
`


export default MAINROUTER;
