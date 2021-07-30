import React from "react";
import {StyledFooter as Styles} from "./logs.styled";
import {Link} from "react-router-dom"

const LogsFooter = () =>
<Styles> 
<footer>
    <div className="forgotten">forgot password?</div>
    <div className="c_n_a">
        New here?,<Link to="/register">Create account</Link>
    </div>
</footer>
</Styles>;

export default LogsFooter;