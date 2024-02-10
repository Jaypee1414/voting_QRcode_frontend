import React from 'react'
import { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import styled from 'styled-components' 
import Axios from 'axios'

function ModalPartylist({open , onClose}) {
    const [partylistName, setPartylistName] = useState("")
    const [meaning, setMeaning] = useState("")
    const [lead, setLead] =useState("")
    let params = useParams();

    const NewPartylist = () =>{
        Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/NewPartylist", {
            ElectionName: params.id,
            PartylistName: partylistName,
            Meaning: meaning,
            Lead: lead
       }).then((response)=>{
           console.log(response);
       })
       alert("Created new Partylist Success")
       window.location.reload();
    }

    if(!open) return null;
  return(
    <BodyWrap className='overlay' onClick={onClose} >
        <Wrapper onClick={(e)=>{
          e.stopPropagation()
        }}>
            <h1 id='h1'>Partylist Form</h1>
            <input
                value={params.id}
                placeholder='Election Name'
                readOnly
            />
            <input
                onChange={(e)=>setPartylistName(e.target.value)}
                placeholder='Partylist Name'
                required
            />
            <input
                onChange={(e)=>setMeaning(e.target.value)}
                placeholder='Description'
                required
            />
            <input
                onChange={(e)=>setLead(e.target.value)}
                placeholder='Lead by'
                required
            />
            <button onClick={NewPartylist} id='create'>
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
height: 55vh;
width:35vw;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgb(231, 231, 231);
color: black;

#h1{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 2.2rem;
    margin-top: 1rem;
  }

  input{
    width: 50%;
    height: 40px;
    margin-left: 1vw;
    border: 2px solid black;
    margin-top:0.5rem; 
    
    
  }
  input::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    
  }

  #create{
    position: absolute;
    width: 49%;
    left: 9vw;
    height: 40px;  
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-top: 3.5rem;
    color: black;
    font-size: 1rem;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
    border: 1px solid;
    border-radius: 6px;
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    cursor: pointer;
  }

`

export default ModalPartylist