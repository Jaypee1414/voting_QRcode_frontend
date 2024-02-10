import React from 'react'
import AdminHome from './AdminHome'
import CandidatesData from '../Component/CandidatesData'
import styled from 'styled-components'
import ModalCandidates from '../Modal/ModalCandidates'
import { Link,useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import { AdminData } from '../Component/AdminData';
import BackgroundImage from '../image/background.jpg'
function Candidates() {
  const [modal, setModal] = useState(false);
  let params = useParams();
  return (
    <div>
        <BodyWrap>
          <h1 id='head'>Candidates under the "{params.partylistName}" Partylist</h1>
          <button onClick={()=> setModal(true)}>
            + new candidate
          </button>
          <CandidatesData/>
          <ModalCandidates  open={modal} onClose={()=> setModal(false)}/>
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
width:82%;
height: 100vh;
overflow:hidden;
overflow-y: scroll;
#head{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.5rem;
  background-color: #282c34;
  color: #f0f8ff;
  letter-spacing: 3px;
  width: 100vw;
  height: 10vh;
  display: flex;
  padding-left: 20px;
  align-items: center;
}

button{
    margin-top: 40px;
    z-index: 100;
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
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;

}

button:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}

#icon{
    font-size: 2rem;
    color: white;
    border: 1px black;
}


#icon:hover{
    color: black;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}
`

export default Candidates