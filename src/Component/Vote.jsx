import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { json, useParams } from 'react-router-dom';
import Axios from 'axios'
import NotAvailable from './NotAvailable';
import DoneVote from './DoneVote';
import BackgroundImage from '../image/background.jpg'

export function Vote(){
  const [election, setElection] = useState([]);
  const [electionName, setElectionName] = useState("");
  const [candidate , setCandidate] =useState([]);
  const [studentID , setStudentID] =useState([]);
  const [position, setPosition] =useState([]);
  const [validation, setValidation] = useState("");
  const [vote, setVote] = useState("");
  const [count, setCount] = useState();
  const [studentvote, setStudentVote] = useState([]);
  const [createPosition, setCreatePosition] =useState("");
  const params = useParams();
  let name,course;
  let newPosition=[];


  useEffect(()=>{
    Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/ElectionName/" + election).then(res =>{
    setElectionName(res.data[0].ElectionName)
    }).catch(err=>{
      console.log(err);
  })
  },[election]);
    

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


    // check if the election is === 0 for validation 
    // if 1 the vote is already Done/close
    function ElectionValidation(){
      election.forEach((info)=>{
        console.log(info.ElectionName)
        if(info.Validation===0){
          setElectionName(info.ElectionName);
        }
      })
    }

    // get all student who official register
    useEffect(()=>{
      Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/school").then(res =>{
        setStudentID(res.data)
        console.log(res.data)
      }).catch(err=>{
        console.log(err);
    })
    },[]);


        // get all studentvote
        useEffect(()=>{
          Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Studentvote/" + params.schoolID).then(res =>{
            setStudentVote(res.data[0].vote)
            console.log(res.data[0].vote);
          }).catch(err=>{
            console.log(err);
        })
        },[params.schoolID]);

    //submit after voting
    const Submit=()=>{
      Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/SubmitVoting", {
          schoolID: params.schoolID
        }).then((response)=>{
            console.log(response);
        }).catch(err=>{
          console.log(err);
        }) 
        alert("Send Vote Success")
        window.location.reload();
    }

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

    const VoteCandidates=(Position)=>{
      Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/CountVote", {
        Vote: vote,
        ElectionName: election,
        Count: count+1
        }).then((response)=>{
            console.log(response);
        }) 

        const newList = position.filter((item) => item.Position !== Position)
        setPosition(newList)

    }


    const removeItem=(arr,item)=>{
    let newArray = [...arr];
    const index = newArray.findIndex((elements)=> elements === item)

    if(index !== -1){
      newPosition.splice(index,1)
      return newPosition;
    }  

    }

  return( 
    <div id='background-color'> 
      <h2>{studentvote===1? <DoneVote/> :
      <div>
         <h2 id='electionName'> {validation===0? electionName :  <NotAvailable/> }</h2>
          {newPosition.map((newposition)=>{
              return(
                <Bodywrap>
                  <h2>{newposition}</h2>
                  {candidate.map((info)=>{
                    return(
                      <div>
                        {newposition === info.position ? 
                         <Wrapper>
                          {StudentName(info.schoolID)}
                          <img src={'https://mysql-sccians-9d8935734292.herokuapp.com/images/'+info.image} 
                          style={{
                            width:'30%',
                          }}
                          />
                          <input 
                            id='radio'
                            type="radio" 
                            name="candidates"
                            value={info.schoolID}
                            onChange={e=>{
                              setVote(e.target.value)
                              setCount(info.vote)
                              setCreatePosition(info.position);
                            }}
                      
                          />
                          <p>
                          {name}
                          &nbsp;
                          {course}
                          <br/>
                          ({info.partylistName})
                          </p>
                          
                         </Wrapper>
                        : " "
                        }
                      </div>
                    )
                  }
                  )}
                          <Button
                            removeCandidates={createPosition}
                            onClick={()=>{
                              VoteCandidates(createPosition)
                            }
                            }
                          > 
                            Save 
                          </Button>
                </Bodywrap>
              )
            })}
            {validation===0? 
                <Button 
                  onClick={Submit}
                  style={{
                    backgroundColor:'#0366d6',
                    borderColor:'#1b1f2326',
                    color:'#ffffff',
                    position: 'absolute',
                    right:'20%',
                    zIndex: '1'
                  }}
                  >
                  Submit
                  </Button>
                  : " "}
      </div>
      
      }      
      </h2>

    </div>
  )
}

const Bodywrap =styled.div`
  border: 1px solid black;
  width: 55%;
  margin-left: 20rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  background-color: white;

  h3{
    margin-top: 1rem;
  }

  input{
    margin-top: 155px;
  }

  @media screen and (max-width: 767px){
    z-index: 10;
    position:relative;
    border-radius: 5px;
    background-color: white;
    margin-left: 9%;
    width: 82%;

    p{
      line-height: 1.2;
      font-size: 1.3rem;
      font-weight: 500;
    }

    #radio{
      margin-top: 110px;
      margin-right: 10px;
    }

    h2{
      padding-bottom: 10px;
      margin-top: 2rem;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

  }
@media screen and (min-width: 767px) and (max-width: 1024px){
  position: relative;
  z-index: 10;
  border-radius: 5px;
  background-color: white;
  margin-left: 8%;
  width: 85%;

  img{
    width: 30%;
  }
  p{
    line-height: 1.2;
    font-size: 1.3rem;
    font-weight: 500;
  }

  #radio{
    position:absolute;
    margin-right: 10%;
    margin-top: 140px;
  }

  h2{
    padding-bottom: 10px;
    margin-top: 2rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
}

  `

const Wrapper = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 1rem;
  width:100%;
  
input{
  position: absolute;
  right : 0;
  margin-right: 10rem;
}

`

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


#button:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}

@media screen and (max-width: 767px){
  margin-bottom: 2rem;
  z-index: 1;
}
`

export default Vote