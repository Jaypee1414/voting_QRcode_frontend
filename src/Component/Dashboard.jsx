import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'
import { FaUserEdit } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
function Dashboard() {
    const [countStudent, setcountStudent ] =useState([]);
    const [countElection, setcountElection ] =useState([]);
    const [countPartylist, setcountPartylist ] =useState([]);

    useEffect(()=>{
        axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/GetRegister").then(res=>{
            setcountStudent(res.data.length);
        }).catch(err=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Election").then(res=>{
            setcountElection(res.data.length);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    useEffect(()=>{
        axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Partylist").then(res=>{
            setcountPartylist(res.data.length);
        }).catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <section id='content'>
        <main>
            <ul class="box-info">
                    <li>
                        <i class='bx bxs-calendar-check' ><MdOutlineEditNote /></i>
                        <span class="text">
                            <h3>{countElection}</h3>
                            <p>Election</p>
                        </span>
                    </li>
                    <li>
                        <i class='bx bxs-group' ><BiBarChartAlt2 /></i>
                        <span class="text">
                            <h3>{countPartylist}</h3>
                            <p>Partylist</p>
                        </span>
                    </li>
                    <li>
                        <i class='bx bxs-dollar-circle' > <FaUserEdit /></i>
                        <span class="text">
                            <h3>{countStudent}</h3>
                            <p>Student</p>
                        </span>
                    </li>
                </ul>
        </main>
    </section>
  )
}

export default Dashboard