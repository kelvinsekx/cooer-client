import React from "react";
import {StyledFooter as Styles} from "./logs.styled";
import {Link} from "react-router-dom"
import styled, {css} from "styled-components"

const LogsFooter = () => {
    const [tr, setTr] = React.useState(false)
    return <Styles> 
    <footer>
        <div className="forgotten">
            <Link to="/retrieve-password">forgot password?</Link></div>
        <div className="c_n_a">
            New here?, <StyledLink tr={tr}><Link 
                        to="/register"
                        onMouseOver={()=>setTr(true)}
                        onMouseOut={()=>setTr(false)}>Create account</Link></StyledLink>
        </div>
    </footer>
    </Styles>
}



const StyledLink = styled.div`
display: inline;
        background: none;
        transition: background 0.6s ease-in;
        transition-delay: 0.7s;
        ${
            (props) => props.tr && css`
            background: rgba(19, 212, 106, 0.9); 
            `
        }

a{
    color: black;
}
`

export default LogsFooter;