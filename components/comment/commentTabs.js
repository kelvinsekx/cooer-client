import React from "react";

const {useState} = React;
const TABS = ({comment}) => {
    const [comm, setComm] = useState("");

    const handleChange = (e) => {
        return setComm(e.target.value)
    }
    return (
        <div>
            <input 
                onChange = {handleChange}
                value={comm}
            />
            <button onClick={()=>comment(comm,setComm)}>gist</button>
        </div>
    )
}
export default TABS;