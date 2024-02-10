import React from 'react'
import AdminHome from './AdminHome'
import styled from 'styled-components' 
import Axios from 'axios'
import ModalPartylist from '../Modal/ModalPartylist'
import ModalPosition from '../Modal/ModalPosition'
import PartylistData from '../Component/PartylistData'
import TallyVotes from '../Component/TallyVotes'
import OpenElection from '../Modal/OpenElection'
import CloseElection from '../Modal/CloseElection'
import ModalTallyofVotes from '../Modal/ModalTallyofVotes'
import { Link,useParams } from 'react-router-dom'
import {BsPatchPlusFill} from 'react-icons/bs'
import { useState } from 'react'
import { AdminData } from '../Component/AdminData';
import BackgroundImage from '../image/background.jpg'

function Partylist() {
    const [modal, setModal] =useState(false)
    const [open, setOpen] =useState(false)
    const [close, setClose] =useState(false)
    const [position, setPosition] =useState(false)
    const [tally, setTally] =useState(false)
  return (
    <div>
        <BodyWrap>
            <h1 id='head'>PARTYLIST BOARD</h1>
            <button onClick={()=> setTally(true)}>
                Tally of Vote 
            </button>
            <button onClick={()=> setPosition(true)}>
                Position
            </button>
            <button onClick={()=> setOpen(true)}>
                Open
            </button>
            <button onClick={()=> setClose(true)}>
                Close
            </button>
            <BsPatchPlusFill onClick={()=> setModal(true)} id='NewIcon'/>
            <PartylistData/>
            {/* <TallyVotes/> */}
            <ModalPartylist open={modal} onClose={()=> setModal(false)} />
            <ModalTallyofVotes open={tally} onClose={()=> setTally(false)}/>
            <ModalPosition open={position} onClose={()=> setPosition(false)} />
            <OpenElection open={open} onClose={()=> setOpen(false)}/>
            <CloseElection open={close} onClose={()=> setClose(false)}/>
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
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
    margin-top: 120px;

}

button:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}

#NewIcon{
    margin: 0 0.5rem;
    position: absolute;
    font-size: 2rem;
    color: white;
    border: 1px black;
    margin-top: 120px;
}


#NewIcon:hover{
    color: #0366d6;
    border-color: black;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}



`

export default Partylist