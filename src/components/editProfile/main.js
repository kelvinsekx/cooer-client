import React from "react"
import EDITABLE from "./editable"
import { BsBriefcaseFill, BsPersonCheck, BsPersonFill, BsPhone } from "react-icons/bs";
import styled from "styled-components";


const editInfo =  [
        {
            icon: BsBriefcaseFill,
            name: 'bio',
            n: "bio",
            bio: 'bio'
        },
        {
            icon: BsPersonFill,
            name: 'Name',
            n:  "name",
            bio: 'name'
        },
        {
            icon: BsPersonCheck,
            name: 'Anonymous Name',
            n: "anonymousname",
            bio: 'anonymousname'
        },
        {
            icon: BsPhone,
            name: 'Telephone',
            n: "telephone",
            bio:'telephone'
        }
    ]

const EDITPROFILE_COMPONENT = ({handleChange, user, handleSubmit, fileHandler})=> 
<StyledWrapper>
<Styles>
    <form onSubmit={(e)=> e.preventDefault()}>
        <div id="imgWrapper">
            <div id="imgin">
                <img src={`${user.photo}`} />
            </div>
            <div>
                <label htmlFor="icon-button-file">
                    <input 
                        accept="image/*" 
                        type="file"       
                        onChange={fileHandler}       
                        style={{display:'none'}}       
                        id="icon-button-file" 
                    />
                    <span className="upload">
                        <span>Upload a photo</span>
                    </span>
                    <small style={{color: 'rgb(27, 214, 10)'}}>    
                        {user.photo ? user.photo.name : ''}
                    </small>
                </label>
            </div>
        </div>

        <div id="writeEd">
            {editInfo.map((e, i) => <EDITABLE 
                key={i}
                Icon={e.icon}
                name={e.name}
                n= {e.n}
                bio={user[e.bio]}
                handleChange={handleChange}
            />)}
            <button onClick={handleSubmit}>Save your changes</button>
        </div>
    </form>
</Styles>
<div></div>
</StyledWrapper>

const StyledWrapper = styled.div`
display: flex;
// border: 1px solid red;
`
const Styles = styled.div`
width: 100%;
.upload {
    border: 2px solid rgb(20, 354, 70);;
    display: inline-block;
    min-height: 1.3rem;
    width: 60vw;
    span{
        display:inherit;
        border: 2px solid white;
        padding: 0.1em;
        background-color: rgb(20, 354, 70);;
        color: white;
        width: 100%;
        text-align: center;
        cursor: pointer;
    }
}
form{
    div#imgWrapper{
         display: flex;
         flex-direction: column;
          justify-content: center;
        align-items: center;
        #imgin{
            box-shadow: 0 0 0 2px #f2f2f2;
            border-radius: 100%;
            width: 12rem;
            height: 12rem;
            overflow: hidden;
            margin: 1em 0;
            margin-left: 0.3rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    div#writeEd{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        button {
            border: 1px solid rgb(7, 454,50);
            border-radius: 5px;
            color: white;
            width: 70%;
            font-size: 1.2rem;
            background-color: rgb(7, 454, 50); 
            cursor: pointer;
           }
    }

}
@media (min-width: 900px){
    width: 40%;
    .upload {
        width: 20vw;
    }
}
`
export default EDITPROFILE_COMPONENT;
