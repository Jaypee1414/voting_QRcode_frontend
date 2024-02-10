import React, { useState, useEffect } from 'react'
import NotAvailable from './NotAvailable';
import Axios from 'axios'
import styled from 'styled-components';
function LiveTallyVotes() {
  const [election, setElection] = useState([]);
  const [validation, setValidation] = useState("");
  const [electionName, setElectionName] = useState([]);
  const [candidate , setCandidate] =useState([]);
  const [studentID , setStudentID] =useState([]);
  const [position, setPosition] =useState([]);
  let name,course;
  let newPosition=[];

  
    // Get The election Open by the admin
    useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Vote").then(res =>{
        setElection(res.data[0].Validation === 0 ? res.data[0].ElectionName : "error")
        setValidation(res.data[0].Validation)
        console.log(res.data) 
        }).catch(err=>{
          console.log(err);
      })
      },[]);

      
        // get all the position in this election
        useEffect(()=>{
            Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Candidateposition/" + election).then(res =>{
            setPosition([])
            setPosition(res.data)
            console.log(res.data)
            }).catch(err=>{
            console.log(err);
        })
        },[election]);

  
        // set all the candidates who are running in this election
        useEffect(()=>{
            Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/vote/" + election).then(res =>{
            setCandidate(res.data)
            }).catch(err=>{
            console.log(err);
        })
        },[election]);


      useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/ElectionName/" + election).then(res =>{
        setElectionName(res.data[0].ElectionName)
        }).catch(err=>{
          console.log(err);
      })
      },[election]);
        
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

      {position.forEach((info)=>{
        newPosition.push(info.Position)
      })} 



  return(
<section id="content" className='print-container'>
    <main>
        <div class="table-data">
            <div class="order">
                <div class="head">
                    <h3>
                        {validation===0? electionName :  <NotAvailable/> }
                    </h3>
                    
                    <Button 
                        className='button'
                        type="button" 
                        onClick={window.print}
                        >
                        Print
                    </Button>
                    <i class='bx bx-search' ></i>
                    <i class='bx bx-filter' ></i>
                </div>
                    {newPosition.map((newposition)=>{
                            return(
                            <table>
                                <tr>
                                    <th><h3>{newposition}</h3></th>
                                </tr>
                                {candidate.map((info)=>{
                                return(
                        <div>
                            {newposition === info.position ?     
                                <tbody>
                                <tr>
                                    {StudentName(info.schoolID)}
                                    <td>{name}&nbsp; &nbsp;({info.partylistName})
                                        <h4 style={{position:'absolute', right: 20}}>
                                            {info.vote}
                                        </h4>
                                    </td>
                                        
                                </tr>
                                </tbody>
                            : " "
                            }
                        </div>
                                )
                                }
                                )}
                            </table>
                    )
                })}
            </div>
        </div>
    </main>
</section>
  )
}

const Button = styled.button`
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


:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}
`

export default LiveTallyVotes