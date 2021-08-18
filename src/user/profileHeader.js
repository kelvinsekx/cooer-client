import React from "react";
import ProfileHead from "./profileHead";
import styled from "styled-components";
import Gist from "./../components/gists/gist/index"
import LISTFOLLOWERS from "./../components/others/ListFollowers";
import TxtLoading from "./../components/loading/txtIsLoading";

const PROFILEHEADER = ({
    getCoos = (f={})=>f,
    coos= [],
    user = new Object(), 
    jwt = new Object(), 
    follow = new Function(),
    profileImage = ""})=> 
<Styles>
   <div id="header">
       <ProfileHead
           user= {user} 
           jwt= {jwt} 
           follow={follow}
           profileImage= {profileImage}
       />
       <div className="profileTabs"> 
            <LISTFOLLOWERS 
                userId={user._id} 
                followers= {user.followers} 
            />
           <div id="bar">
               <button onClick={()=>getCoos(user)}>Coos</button>
               <button>Gallery</button>
           </div> 
        <div>
            { COO(coos) }
        </div> 
       </div>
   </div>
</Styles>;

const COO = (coos)=> {
    if (coos == null) {
        return <TxtLoading />
    }
    if(coos.length > 1) {
        return <div>
            {coos.map( coo => 
            <Gist 
                payload={coo}
                status={"status"} 
                key={coo._id} />)
        }</div>
    } else {
        return <div id="noCoo">No coo yet</div>
    }
}


const Styles = styled.div`
width: 80%;
div#header {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 2em;
    div.profileTabs{
        div#bar{
            display: flex;
            background-color: #f1f1f1;
            color: #555555;
            button{
                color: inherit;
                font-size: 1.24rem;
                min-width: 5rem;
                text-align: left;
                border: none;
            }
            button:nth-child(1){
                border-bottom: 4px solid rgba(27, 214, 10, 0.95);
            }
        }
        div#noCoo{
            border: 1px solid rgba(27, 214, 10, 0.95);
            height: 90vh;
            text-align: center;
            font-size: 2rem;
            color: #444;
        }
    }
}
@media (max-width: 750px) {
    width: 100%;
    height:94vh;
    overflow-y: scroll;
           
}
@media (max-width: 1150px) {
    div#header {
        grid-template-rows: 8rem 1fr;
        grid-template-columns: 100%;
        grid-gap: 3em;
    }
}
`
export default PROFILEHEADER;