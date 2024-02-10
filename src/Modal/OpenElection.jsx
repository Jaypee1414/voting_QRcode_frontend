import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

function OpenElection({open , onClose}) {
    let params = useParams();
    const OpenNewElection=()=>{
        Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/openElection", {
            electionName: params.id
       }).then((response)=>{
           console.log(response);
       })
       alert("Open Election Success");
       window.location.reload();
    }
    
    if(!open) return null;
  return (
    <BodyWrap className='overlay' onClick={onClose} >
        <Wrapper onClick={(e)=>{
        e.stopPropagation()
        }}>
            <h5>Are you sure to open this election?</h5>
            <div className='btn'>
                <button onClick={OpenNewElection} className='newBtn'>
                    Yes
                </button>
                <button onClick={onClose} className='newBtn'>
                    No
                </button>
            </div>
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
background-color: rgba(0,0,0,0.6);
color: black;
`

const Wrapper = styled.div` 
box-shadow: 5px 5px lightblue;
position: absolute;
border: 2px solid #293846; 
border-radius: 5px;
height: 20vh;
width:20vw;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #73b504;
color: black;

h5{
    margin-top: 2.5rem;
    font-size: 1rem;
}

.btn{
    margin-top: 1rem;
}


.newBtn{
    margin-top: -0px;
}
`
export default OpenElection