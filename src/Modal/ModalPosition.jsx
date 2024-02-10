import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
function ModalPosition({open , onClose}) {
    const [position, setPosition] = useState("");
    const params = useParams();
    const NewPosition = () =>{
        Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/NewPosition", {
            electionName: params.id,
            position: position
       }).then((response)=>{
           console.log(response);
       })
       alert("Created new election Success")
       window.location.reload();
    }
    if(!open) return null;
  return (
    <BodyWrap className='overlay' onClick={onClose} >
        <Wrapper onClick={(e)=>{
          e.stopPropagation()
        }}>
            <h1 id='h1'>Position</h1>
            <input
                onChange={(e)=>(setPosition(e.target.value))}
                placeholder='Input a Position...'
                required
            />
            <button id='create' onClick={NewPosition}>
                Done
            </button>
        </Wrapper>
    </BodyWrap>
  )
}

const BodyWrap = styled.div`
box-shadow: 5px 5px lightblue;
position: absolute;
border: 2px solid #293846; 
border-radius: 5px;
height: 110vh;
width:100vw;
top:-5vh;
left: -10vw;
background-color: rgba(0,0,0,0.5);
color: black;
`

const Wrapper = styled.div` 
box-shadow: 5px 5px lightblue;
position: absolute;
border: 2px solid #293846; 
border-radius: 5px;
height: 30vh;
width:30vw;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #73b504;
color: black;

#h1{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida   Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 2.2rem;
    margin-top: 1rem;
  }

  input{
    width: 50%;
    height: 40px;
    margin-left: 1vw;
    border: 2px solid #293846;
    margin-top:0.5rem; 
    
    
  }
  input::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    
  }

  #create{
    border: 1px solid black;
    position: absolute;
    width: 10vw;
    left: 35%;
    height: 40px;
    background-color: yellow;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    margin-top: 3.5rem;
    color: black;
    font-size: 1rem;
  }

`


export default ModalPosition