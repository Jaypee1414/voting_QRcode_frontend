import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import AdminHome from './AdminHome'
import ElectionData from '../Component/ElectionData'
import { AdminData } from '../Component/AdminData';
import BackgroundImage from '../image/background.jpg'
function Election() {
  return (
    <div>
        <BodyWrap>
            <h1>Southern City Colleges Election Board</h1>
            <ElectionData/>
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
h1{ 
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
`

export default Election