import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../image/VotingUserBackground.png'
import { useNavigate, NavLink } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const Scan=()=>{
    navigate('/UserLogin')
  }
  return (
    <div id='newBackgroundImage'>
        <button id='newButton' onClick={Scan}>Login</button>
    </div>
  )
}


export default UserLogin