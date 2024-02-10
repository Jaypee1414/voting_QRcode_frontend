import React from 'react'
import { useState, useEffect } from 'react'
import {Html5QrcodeScanner} from 'html5-qrcode'
import { useNavigate, NavLink } from "react-router-dom";
import Axios from 'axios';
import Home from '../Component/Home';
import styled from 'styled-components';
import backgroundImage from '../image/VotingUserBackground.png'
import icon from '../image/icon.png'

function Login() {
  const navigate = useNavigate();
  let [Result, setResult] = useState("")
  const [logmsg , setLogmsg] = useState("");
  // const [modal , setModal] = useState();

  // const login =()=>{
  //   Axios.post("http://localhost:5000/Login",{
  //         StudentID : Result
  //       }).then((response)=>{
  //         console.log(response)
  //     })
  // }

  useEffect(()=>{
        const Reader = new Html5QrcodeScanner( 'reader', {
            qrbox:{
                width: 250,
                height: 250,
            },
            fps: 5,
        });
        
        Reader.render(success, error);
        function success(result) {
            Reader.clear();
            console.log(result)
            setResult(result)
          }
    
        function error(err) {
            console.log(err);
        }    
    },[])

    

  return (
    <div id='background'>
        {Result 
        ? <div id='login' > 
          {console.log(Result = JSON.parse(Result))}  
          {Result.StudentID.length == 9 ? <Home {...Result}/> : <h1>Invalid QR code</h1> }
          </div>
        : <div id='reader'></div>
        }
    </div>
  )
}

export default Login