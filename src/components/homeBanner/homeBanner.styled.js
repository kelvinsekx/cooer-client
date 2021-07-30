import styled from "styled-components";


export const HomeBanner = styled.div`
 color: #222222;
 width: 60%;
 display: flex;
 div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .bd{
        font-size: 3.4501rem;
        font-weight: 789.432;
        color: #0e7713;
    }
    p{
        font-size: 1.884rem;
        width: 90%;
   }
}

@media (max-width: 900px){
    width: 100%;
    background-color: rgba(19, 212, 106, 0.3);
    padding: 0.1em;
    div{
        .bd{
            font-size: 1.3501rem;
        }
        p{
            font-size: 0.984rem;
            width: 100%;
       }
    }
}
@media (max-width: 490px){
    justify-content: center;
    div{
        .bd{
            font-size: 1.3501rem;
        }
        p{
            font-size: 0.95rem;
            width: 100%;
            font-weight: bold;
       }
    }
}
`