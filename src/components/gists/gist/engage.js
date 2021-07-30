import React from "react";
import styled from "styled-components"

const ENGAGE = ({payload})=>{
    const { doComment, comm, handleChange} = payload;

return (
<Styles>
<div id="eng">
    <input 
        placeholder="join the gist..." 
        value={comm}
        onChange={handleChange}></input>
    <button onClick={doComment}>send</button>
</div>
</Styles>
)}

const Styles = styled.div`
div#eng{
    padding-bottom: 0.34rem;
    div{
        border-bottom: 1px solid grey;
        padding-bottom: 0.12em;
        color:
    }
}
`;

export default ENGAGE;