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
            <Link to={`/profile/${info.pigeon}`}>@{info.pigeon.length > 10 ? info.pigeon.substring(0, 5) + "...": info.pigeon}</Link> 
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
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    min-height:2rem;
    font-size: 98%;
    div.userSummary{
        display: flex;
        align-items: center;
        flex-grow: 1;
        div.userName{
            display: flex;
            color: #333333;
            font-weight: bold;
            padding-right: 0.3rem;
            div.verify{
                padding-left: 0.463em;
            }
        }
        div.toPigeon{
            font-family: fantasy;
            a{
                text-decoration: none;
                color: inherit;
            }
        }
        div.joined {
            padding-left: 0.3em;
        }
    }
}
`

export default DPHEADER;
