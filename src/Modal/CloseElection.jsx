import React from 'react'
import Axios from 'axios'
import { useState,useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

function CloseElection({open , onClose}) {
    const [election, setElection] = useState([])
    let params = useParams();
    let ElectionName;

    const CloseElection=()=>{
        Axios.put("https://mysql-sccians-9d8935734292.herokuapp.com/update/"+ params.id).then(res=>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        DeleteTableDAta(); 
        window.location.reload();
        alert("Close Election Success");
    }

    const DeleteTableDAta=()=>{
        Axios.delete('https://mysql-sccians-9d8935734292.herokuapp.com/deleteTable')
        .then(res =>{
            console.log(res)
        }).catch(err => console.log(err))
    }

    useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/CloseElection/"+ params.id).then(res=>{
            setElection(res.data[0].ElectionName)
            ElectionName=election
        }).catch(err =>{
            console.log(err)
        })
    },[])
    if(!open) return null;
  return (
    <BodyWrap className='overlay' onClick={onClose} >
        <Wrapper onClick={(e)=>{
        e.stopPropagation()
        }}>
            <h5>Are you sure to end this election?</h5>
            <div className='btn'>
                <button onClick={CloseElection} className='newBtn'>
                    Yes
                </button >
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
export default CloseElection