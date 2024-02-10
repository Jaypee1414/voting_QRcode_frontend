import React, { useEffect, useState } from 'react'
import { PiEyedropperSampleThin } from 'react-icons/pi';
import { useNavigate,Link,useParams } from "react-router-dom";
import Axios from 'axios';
import styled from 'styled-components';
const Home = (props)=> {
  const [voteID, setVote] = useState([]);
  const [electionID, setElectionID] =("");
  const navigate = useNavigate();
  
  const vote=()=>{
  navigate(`/UserLogin/Vote/${props.StudentID }`)
 }

  return (
    <div id='background-color'>
      <Wrapper >
        <Info>
          <h1>{props.StudentID}</h1>
          <h1>{props.StudentName}</h1>
          <h1>{props.Course}</h1>
        </Info>
        <Button>
            <button onClick={vote}>
              Vote Now
            </button>
        </Button>
      </Wrapper>
    </div>
  )
}

const BodyWrap = styled.div`
position: absolute;
border: 2px solid #293846; 
border-radius: 5px;
height: 100vh;
width:100vw;
background-color: rgba(0,0,0,0.8);
color: black;


@media screen and (max-width: 767px){
  position: absolute;
  border: 2px solid #293846; 
  border-radius: 5px;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  color: black;
}

`

const Wrapper = styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
background-color:white;
border: 2px solid aqua;
width: 30%;
height: 40vh;
border-radius: 10px;
color: black;

#title{
  border: 1px solid black;
  display: inline-block;
  margin-top: -3rem;
  margin-left: 0;
  font-size: 1.5rem;
  background-color: beige;
  width:50%;
  color: black;
}



@media screen and (max-width: 767px){
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 2px solid aqua;
  width: 70%;
  height: 40vh;
  border-radius: 10px;
  color: white;
}



`

const Button = styled.div`
position: absolute;
bottom: 0;
width: 100%;

button{
  margin-left: 0.3rem;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: #0366d6;
  background-color: #fafbfc;
  border-color: black;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;


  
  &:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
  }

}


@media screen and (max-width: 767px){
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 5%;
  button{
    border: 1px solid black;
    z-index:1;
    margin-left: 0.3rem;
    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    border: 1px solid;
    border-radius: 6px;
    color: #0366d6;
    background-color: #fafbfc;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
  
  
    
    &:hover{
      color: #ffffff;
      background-color: #0366d6;
      border-color: #1b1f2326;
      box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
      transition-duration: 0.1s;
    }
  }
}

`

const Info = styled.div`
margin-top: 2rem;position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
color:black;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export default Home