import React from 'react'
import styled from 'styled-components';
import Axios from 'axios';
import { Link,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Candidates from '../Pages/Candidates';
import {CgProfile} from 'react-icons/cg'

function CandidatesData() {
  const [candidate,setCandidate]=useState([]);
  const [info, setInfo] = useState([])
  const [studentID , setStudentID] =useState([]);
  const params = useParams();
  let name,course;
 
    // get all student who official register
    useEffect(()=>{
      Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/school").then(res =>{
        setStudentID(res.data)
        console.log(res.data)
      }).catch(err=>{
        console.log(err);
    })
    },[]);
    function StudentName(ID){
      studentID.forEach((info)=>{
        if(ID === info.schoolID){
          name = info.fullname;
          course = info.course;
        }
      })
    }

 useEffect(()=>{
    Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Participants/"+ params.electionName).then(res =>{
      setCandidate(res.data)
      console.log(candidate)
      console.log(params.electionName)
    }).catch(err=>{
      console.log(err);
  })
  },[params.electionName]); 
  return(
	<section id="content">
		<main>
			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>CANDIDATES</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th><h3>Candidates</h3></th>
								<th><h3>Name</h3></th>
								<th><h3>Position</h3></th>
							</tr>
						</thead>
						<tbody>
            {candidate.map((info)=>{
              {StudentName(info.schoolID)}
              if(info.partylistName == params.partylistName){
                return(
                  <tr>
                    <td>
                      <img src={'https://mysql-sccians-9d8935734292.herokuapp.com/images/'+info.image} />
                    </td>
                    <td>
                      <p>
                        {name}
                        &nbsp;
                        {course}
                      </p>
                    </td>
                    <td>
                      <p>{info.position}</p>
                    </td>
                  </tr>
                )
              }
            })}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	</section>
  )
}


export default CandidatesData