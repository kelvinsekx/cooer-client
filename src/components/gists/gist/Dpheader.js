import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";
import CooerTimeTeller from "../../others/cooTimeTeller";

const DPHEADER = ({info}) =>
<Styles>
<div id="DBHead">
    <div className="userSummary">
        <div className="userName">
            <div>{info.postedBy}</div> 
            <div className="verify">~</div>
        </div>
        <div className="toPigeon">
            <Link to={`/profile/${info.pigeon}`}>@{info.pigeon.length > 7 ? info.pigeon.substring(0, 5) + "...": info.pigeon}</Link> 
        </div>
        <div className="joined">
            <CooerTimeTeller time={info.created} />
        </div>
    </div>
</div>
</Styles>;

const Styles = styled.div`
div#DBHead{
    background-color: white;
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    min-height:2rem;
    div.userSummary{
        display: flex;
        align-items: center;
        flex-grow: 1;
        div.userName{
            display: flex;
            font-size:90%;
            color: #333333;
            font-weight: bold;
            padding-right: 0.3rem;
            div:nth-child(1){
                font-size: 120%;
            }
            div.verify{
                padding-left: 0.463em;
            }
        }
        div.toPigeon{
            font-size:80%;
            min-width: 4rem;
            font-family: fantasy;
            a{
                text-decoration: none;
                color: rgb(9, 122, 28);
            }
        }
        div.joined{
            font-size: 74%; 
        }
    }
}
`

export default DPHEADER;