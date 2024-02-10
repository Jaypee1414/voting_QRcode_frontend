import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import CreateElection from '../Component/CreateElection'
import AdminHome from './AdminHome'
import { AdminData } from '../Component/AdminData';
import BackgroundImage from '../image/background.jpg'
function CreatedElection() {
  return (
    <div>
      <BodyWrap>
        <Form>
          <h1>Election Form</h1>
          <CreateElection/>
        </Form>
      </BodyWrap>
    <div>
        <img src={BackgroundImage} alt="" srcset="" id='BackgroundImage'/>
        <div className='sidebar'>
        <div id='Wrapper'>
            <ul className='sidebarlist'>
            {AdminData.map((val, key )=>{
            return(
                <li
                className='row' 
                key={key} 
                onClick={()=>window.location.pathname = val.link}>
                <div id='admin'><img src={val.img} alt="" srcset="" /></div>
                <div id='icon'>{val.icon}{" "}</div>
                <div id='datatitle'>{val.title}</div>
                </li>         
            )
            })}
            </ul>
        </div>
        </div>    
    </div>
    </div>
  )
}

const BodyWrap = styled.div`
right: 0;
position: absolute;
width:83.7%;
height: 100vh;

h1{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2.5rem;
  margin-top: 0.7rem;
}
`
const Form = styled.div`
background-color: rgb(231, 231, 231);
color: black;
  box-shadow: 10px 10px lightblue;
  position: absolute;
  border: 2px solid #293846; 
  border-radius: 5px;
  height: 50vh;
  width:37vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`

export default CreatedElection