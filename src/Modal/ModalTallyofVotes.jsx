import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

function ModalTallyofVotes({open , onClose}) {

  const [validation, setValidation] = useState("");
  const [electionName, setElectionName] = useState([]);
  const [candidate , setCandidate] =useState([]);
  const [studentID , setStudentID] =useState([]);
  const [position, setPosition] =useState([]);
  const params = useParams();
  let name,course;
  let newPosition=[];


      
        // get all the position in this election
        useEffect(()=>{
            Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Candidateposition/" + params.id ).then(res =>{
            setPosition([])
            setPosition(res.data)
            console.log(res.data)
            }).catch(err=>{
            console.log(err);
        })
        },[params.id]);

  
        // set all the candidates who are running in this election
        useEffect(()=>{
            Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/vote/" + params.id ).then(res =>{
            setCandidate(res.data)
            }).catch(err=>{
            console.log(err);
        })
        },[params.id]);


      useEffect(()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/ElectionName/" + params.id).then(res =>{
        setElectionName(res.data[0].ElectionName)
        }).catch(err=>{
          console.log(err);
      })
      },[params.id]);
        
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

// -----------------------------------------------
    if(!open) return null;
  return (
    <BodyWrap className='overlay' onClick={onClose} >
        <Wrapper onClick={(e)=>{
          e.stopPropagation()
        }}
        >
          	<section id="content">
		<main>
			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>{electionName}</h3>
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
                        <td>
                          {name}
                            &nbsp; 
                            &nbsp;
                            ({info.partylistName})
                            <h4 
                            style={{position:'absolute', right:20}}
                            >
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
background-color: rgba(0,0,0,0.5);
color: black;
`

const Wrapper = styled.div`
  width: 80%;
  position: absolute;
  margin: 90px 130px;
  `
export default ModalTallyofVotes