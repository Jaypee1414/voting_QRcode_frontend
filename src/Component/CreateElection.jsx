import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
function CreateElection() {
  const [electionName, setElectionName]= useState("");
  const [electionYear, setElectionYear]= useState("");
  const [description, setDescription]= useState("");
  const [headName, setHeaded]= useState("");

  const CreateNewElection = () =>{        
      // Axios.post("http://localhost:5000/NewElection", {
      //   ElectionName: electionName,
      //   ElectionYear: electionYear,
      //   HeadedName: headName,
      //   Description: description
      // }).then((response)=>{
      //     console.log(response);
      // })
      // window.location.reload();
    }

  const NewElection = ()=>{
       Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/NewElection", {
        ElectionName: electionName,
        ElectionYear: electionYear,
        HeadedName: headName,
        Description: description
      }).then((response)=>{
          console.log(response);
      })
      alert("Created new election Success")
      window.location.reload();
  }  

  return (
    <div>
      <BodyWrap>
        <input
        placeholder='Input a Election Name'
        onChange={(e)=>setElectionName(e.target.value)}
        required
        />
        <Small>
          <input
          placeholder='Head by:'
          onChange={(e)=>setHeaded(e.target.value)}
          required
          />
          <input
          placeholder='Date(M/D/Y)'
          onChange={(e)=>setElectionYear(e.target.value)}
          required
          />
        </Small>
        <input
        id='desc'
        placeholder='Description'
        onChange={(e)=>setDescription(e.target.value)}
        required
        />
        <button onClick={NewElection}>
          Create New
        </button>
      </BodyWrap>
    </div>
  )
}

const BodyWrap = styled.div`
  position: absolute;
  height: 55vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-item: center;
  top:-50px;
  

  input{
    z-index: 1;
    width: 50%;
    height: 40px;
    margin-left: 10vw;
    border: 2px solid #293846;
    margin-top:0.5rem; 
    border: 2px solid black;
    
  }
  input::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    
  }



  button{
    position: absolute;
    width: 50%;
    margin-left: 10vw;
    height: 40px;
    margin-left: 10vw;
    margin-top:1rem; 
    margin-top: 15rem;
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    cursor: pointer;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  button:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}
  
`

const Small = styled.div`
position: absolute;
height: 50vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center; 
align-item: center;
top:0;
right: 1vw;
margin-top:12.5rem;

input{
  width: 20%;
  height: 40px;
  margin-left: 0.3vw;
  border: 2px solid #293846;
  margin-top:2rem; 
}
`
export default CreateElection