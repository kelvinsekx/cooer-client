import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import auth from "./../../helpers/auth.helper"
import {READ} from "./../../apis/user/api-user";

const LISTFOLLOWERS = ({userId, followers}) => {
    if(userId === auth.isAuthenticated().user._id){
        return null
    }
    const [follower, setFollower] = React.useState([])
    React.useEffect(() => {
        
        const abortController = new AbortController;
        const signal = abortController.signal;
        const jwt = auth.isAuthenticated()

        READ(`followers{
            details{
              name
              id
              username
            }
          }`,{userId: auth.isAuthenticated().user.username }, {token: jwt.token}, signal).then(data => {
            if (data && data.error){
                console.log(data.error)
            }else {
                const {data: {person: {followers : {details}}}} = data
                setFollower(details)
            }
        });

        return function cleanup () {
            abortController.abort()
        }
    }, [])
    
    const yourFollowers = follower;
    const visitorFollowers = followers;

    console.log(visitorFollowers)

    const sameFollowers = yourFollowers.filter( each => {
        for (let x of visitorFollowers) {
            if (each._id === x._id){
                return true;
            }
        }
    })

    let rr
    if(sameFollowers.length < 6) {
        rr = sameFollowers.map((follower, i)=><Link to={`/profile/${follower.username}`} key={`${follower.username}+${i}`}>{follower.name} </Link>)
    } else {
        let aSlice = sameFollowers.slice(0, 4);
        rr = aSlice.map((follower, i)=><Link to={`/profile/${follower.username}`} key={`${follower.username}+${i}`}>{follower.name.length > 7 ? follower.name.substring(0, 6) + ".." : follower.name}, </Link>) 
        rr = <span> {rr} {`&`} {(sameFollowers.length - 4)} others you may know</span>
    }
    //console.log(sameFollowers)
    return (
        <Styles >
            { (sameFollowers.length < 1) ? 
                "" : <div className="f">
                        <p> Followed by {rr}.</p>
                    </div>
            }
        </Styles> 
        
    )
}

const Styles = styled.div`
font-size: 87%;
div.f{
    display: inline-flex;
    align-items: center;
    padding-left: 1rem;
    height: 3rem;
    vertical-align: middle;
    border-top: 1px solid rgba(0,0,0,0.1);
    a{
        text-decoration: none;
        color: rgba(27, 160, 70, 0.95);
    }
}
`

export default LISTFOLLOWERS;