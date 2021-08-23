import React from "react";
import { FiDivideSquare, FiUserCheck, FiUsers } from "react-icons/fi";
import styled from "styled-components"
import {Link} from "react-router-dom";

import JOINED_DAY from "./../components/others/Date"


const PROFILEHEAD = (props) =>  
<Styles>
<div className="profiler">
    <div style={{padding: "3rem", background: "yellow"}}></div>
    <ProfilePayload {...props}/>
</div>
</Styles>

const ProfilePayload = ({user, jwt, follow, profileImage})=> <StyledProfile>
<div className="profilestuff">
    <div className="img"><img src={profileImage} alt={user.name} /></div>
    <div>
        <p>joined <JOINED_DAY date={user.join} /></p>
    </div>
</div>
<div className="otherInfoWrapper">
  <div className="m">
  <div style={{display: "flex", justifyContent: "space-between"}}>
        <div id="basicInfo">
            {user.name} 
            <span>{`@${user.username}`}</span>
        </div>
        <div>
            {
                (jwt.user._id == user._id) ? 
                <button className="followBtn">
                    <Link to={{
                        pathname: `/profile/${user.username}/edit`,
                        state: {state: user}
                    }} style={{color: "inherit", textDecoration: "none"}}>Edit Profile</Link>
                </button>
                : 
                <button className="followBtn" onClick={follow}>
                    {(user.followers.some(e=>e._id == jwt.user._id)) ? "Unfollow" : "Follow"}
                </button>
            }
        </div>
    </div>
    <div className="mJInfo">
        <div className="joined">
            <p>{user.bio}</p>
        </div>
        <div style={{display: "flex", gap: "3em"}}>
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
</div>
</StyledProfile>


const StyledProfile = styled.div`
display: flex;
padding: 0.3em 1em;
.profilestuff{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-size: 80%;
    .img{
        width: 6rem;
        height: 6rem;
        border-radius: 100%;
        img{
            width: 100%;
            height: auto;
            border-radius: inherit;
        }
    }
}
.otherInfoWrapper{
    display: flex;
    padding:0px 1em;
    flex-basis: 44rem;
    .m{
        flex-grow:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .followBtn{
            width: 6rem;
            background-color: green;
            color: white;
            border: none;
            padding: 0.3em 0;
            cursor: pointer;
            border-radius:5px;
        }
    }
    .mJInfo{
        max-width: 34rem;
        flex-basis: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
@media (max-width: 580px){
    padding: 0.3em 0.2em;
    .profilestuff{
        min-width: 22%;
        .img{
            width: 4rem;
            height: auto;
        }
    } 
    .otherInfoWrapper{
        padding: 0px 0.3em;
    } 
}
`


const Styles = styled.div`
font-size: 90%;
div.profiler{
    display: flex;
    flex-direction: column;
}
`
export default PROFILEHEAD;