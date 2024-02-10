import React, { useState, useEffect } from 'react'
import NotAvailable from './NotAvailable';
import Axios from 'axios'
function Audit() {
    const [audit, setAudit] =useState([]); 
    const [studentID , setStudentID] =useState([]); 
    let name,course;  

    useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/AuditLog").then(res =>{
            setAudit(res.data)
        }).catch(err=>{
          console.log(err);
      })
      },[]);

    // get all student who official register
    useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/school").then(res =>{
          setStudentID(res.data)
          console.log(res.data)
        }).catch(err=>{
          console.log(err);
      })
      },[]);

          // function for set Student using their ID 
    function StudentName(ID){
        studentID.forEach((info)=>{
          if(ID === info.schoolID){
            name = info.fullname;
            course = info.course;
          }
        })
      }

  return (
    <section id="content"
    style={{
        width: '400px'
    }}
    >
    <main>
        <div class="table-data">
            <div class="order">
                <div class="head">
                    <h3>AUDIT LOG</h3>
                    <i class='bx bx-search' ></i>
                    <i class='bx bx-filter' ></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th><h3>NAME</h3></th>
                            <th
                            style={{
                                paddingLeft:'40px'
                            }}
                            ><h3>TIMESLAP</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {audit.map((info)=>{
                            let date = new Date(info.DateVote)
                            {StudentName(info.schoolID)}
                            return(
                                <tr>
                                    <td>{name}<br/>({course})</td>
                                    <td
                                        style={{
                                            paddingLeft:'40px'
                                        }}
                                    >{date.toString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</section>
  )
}

export default Audit