import React from "react"
import styled from "styled-components";

export default function Haha () {
    return (
    <HomeBanner>
        <div className="intro-content">
            <div className="bd">cooer</div>
            <p>cooer will connect you to a world of dreams...</p>
        </div>
    </HomeBanner>
    )
}

export const HomeBanner = styled.div`
 background-color: rgba(19, 212, 106, 0.3);
 color: #222222;
 width: 100%;
 height: inherit;
 display: flex;
 align-items: center;
 justify-content: center;
 div.intro-content{
    display: flex;
    width: 80%;
    flex-direction: column;
    .bd{
        font-size: 300%;
        font-weight: 789.432;
        color: #0e7713;
    }
    p{
        font-size: 150%;
   }
}

// desktop size
@media (min-width: 900px){
    width: 40%;
}

// very-small mobile view
@media (max-width: 490px){
    justify-content: center;
    div.intro-content{
        .bd{
            font-size: 200%;
        }
        p{
            width: 100%;
            font-size: 96%;
       }
    }
}
`