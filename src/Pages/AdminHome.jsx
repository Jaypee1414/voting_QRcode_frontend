import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import '../App.css';
import styled from 'styled-components'
import { AdminData } from '../Component/AdminData';
import BackgroundImage from '../image/background.jpg'
import Dashboard from '../Component/Dashboard';
import LiveTallyVotes from '../Component/LiveTallyVotes';
import Audit from '../Component/Audit';
const AdminHome = () => {
    const [election, setElection] = useState([]);
    const [electionName, setElectionName]= useState("");
    const [electionYear, setElectionYear]= useState("");
    
    const CreateNewElection = () =>{        
      Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/NewElection", {
        ElectionName: electionName,
        ElectionYear: electionYear
      }).then((response)=>{
          console.log(response);
      })
      window.location.reload();
      // setElectionName('');
      // setElectionYear('');
    }


    useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Election").then(res =>{
        setElection(res.data)
        }).catch(err=>{
          console.log(err);
      })
  
      },[]);

  return (
    <div>
    <BodyWrap>
    <img src={BackgroundImage} alt="" srcset="" id='BackgroundImage' style={{position:'fixed'}}/>
    <div className='dashboard'>
      <Dashboard/>
      hello
    </div>
    <div className='Tally' >
      <LiveTallyVotes />
    </div>
    <div className='Audit'>
      <Audit/>
    </div>
    </BodyWrap>
    <div className='sidebar' style={{position:'fixed'}}>
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
  )
}
const BodyWrap = styled.div`
right: 0;
position: absolute;
width:98%;
height: 100vh;
overflow:hidden;
overflow-y: scroll;
`


export default AdminHome