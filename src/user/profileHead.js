import React from "react";
import { FiUserCheck, FiUsers } from "react-icons/fi";
import styled from "styled-components"
import {Link} from "react-router-dom";

import JOINED_DAY from "./../components/others/Date"


const PROFILEHEAD = ({user, jwt, follow, profileImage}) =>  
<Styles>
<div className="profiler">
    <div className="profilestuff">
        <img src={profileImage} alt={user.name} />
    </div>
    <div className="otherInfoWrapper">
        <div id="basicInfo">
            {user.name} 
            <span>{`@${user.username}`}</span>
        </div>
        <div className="joined">
            <p>{user.bio}</p>
            <p>joined on 
            <JOINED_DAY date={user.join} />
            </p>
        </div>
        <div>
            {
                (jwt.user._id == user._id) ? 
                <Link to={{
                    pathname: `/profile/${user.username}/edit`,
                    state: {state: user}
                }} style={{color: "inherit", textDecoration: "none"}}>Edit Profile</Link>
                : 
                <button id="followBtn" onClick={follow}>
                    {(user.followers.some(e=>e._id == jwt.user._id)) ? "Unfollow" : "Follow"}
                </button>
            }
        </div>
        <div id="foll">
            <div>
                <span><FiUsers /></span> 
                <span>{user.followersLength || 0} followers</span>
            </div>
            <div>
                <span><FiUserCheck /></span> <span>{user.followingLength || 0} following</span>
            </div>
        </div>
    </div>
</div>
</Styles>


const Styles = styled.div`
padding-left: 1rem;
margin-top: 2rem;
div.profiler{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .profilestuff{
        height: 17rem;
        width: 17rem;
        //border: 1px solid red;
        display: inline-block;
        overflow: hidden;
        border-radius: 100%;
        box-shadow: 0 0 0 2px #f2f2f2;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .otherInfoWrapper {
        background-color: white;
        width: 100%;
        div#basicInfo{
            font-weight: bold;
            font-size: 140%;
            span{
                color: rgb(121, 110, 110);
                font-size: 67%;
                font-weight:400;
            }
        }
        div.joined{
            font-size: 90%;
            color: #555555;
            min-height: 4rem;
            align-self: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        div:nth-child(3){
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2rem;
            border-radius: 0.3em;
            color: #f5f5f5 !important;
            a, button{
                border: none;
                border-radius: inherit;
                width: 100%;
                cursor: pointer;
                text-align: center;
                align-self: center;
                padding: 0.25em 0;
                font-size: 102%;
                color: inherit;
                background-color: rgb(9, 122, 28);
            }
        }
        div#foll{
            display: flex;
            justify-content: space-around;
            width: 100%;
            color: rgb(121, 110, 110);
            div{
                display: flex;
                font-size: 89%;
                span:nth-child(2){
                    padding-left: 0.3em;
                }
            }
        }
    }
}
@media (max-width: 1150px) {
    margin-top: 0.7rem;
    div.profiler{
        flex-direction: row;
        .profilestuff{
            width: 12rem;
            height: 9rem;
        }
        .otherInfoWrapper{
            margin-right: 1.5em;
        }
    }
}
@media (max-width: 650px) {
    margin-top: 0.34rem;
    div.profiler{
        .profilestuff{
            width: 7rem;
            height: 5rem;
        }
    }
}
`
export default PROFILEHEAD;