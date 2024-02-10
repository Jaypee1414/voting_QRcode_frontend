import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

function ModalCandidates({open , onClose}) {
    const [schoolID , setSchoolID] =useState("");
    const [student , setStudent] =useState([]);
    const [name , setName] =useState("");
    const [course , setCourse] =useState("");
    const [address , setAddress] =useState("");
    const [position , setPosition] =useState([]);
    const [positionvalue , setPositionValue] =useState("");
    const [file, setFile] = useState();
    let params = useParams();
    

    const SubmitForm=()=>{
      
      const formdata = new FormData();
      formdata.append('image',file)
      formdata.append('electionName',params.electionName)
      formdata.append('partylistName',params.partylistName)
      formdata.append('position',positionvalue)
      formdata.append('schoolID',schoolID)
      Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/SubmitForm",formdata).then((response)=>{
           console.log(response);
          }).catch(err=>{
            console.log(err);
          }) 
          alert("Add new Candidate Success")
    }

    const Display =()=>{
        Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/NewCandidate/" + schoolID).then((res)=>{
          setStudent(res.data)
          console.log(student);
          console.log(res);

          student.map((info)=>{
            setName(info.fullname)
            setCourse(info.course)
            setAddress(info.address)
          })
          console.log(name);
       }).catch(err=>{
          console.log(err);
       })
    }
    const election = params.electionName;
    
    useEffect(()=>{
      Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/position/" + election).then((res)=>{
        setPosition(res.data)
        console.log(position)
     }).catch(err=>{
        console.log(err);
     })
    },[])

    useEffect(()=>{
      Display();
    },[])

    function handlefile(e){
      setFile(e.target.files[0])
    }

    if(!open) return null;
  return (
    <BodyWrap className='overlay' onClick={onClose} >
    <Wrapper onClick={(e)=>{
      e.stopPropagation()
    }}>
        <h1 id='h1'>Candidate Form</h1>
        <input 
            onChange={(e)=>{setSchoolID(e.target.value)}}
            placeholder='Search School ID'
            type="search" 
            name="gsearch"
            id='search'
        />
        <br/>
        <button 
          id='searchbtn'
          onClick={Display}
          >
          Search
          <IoSearchOutline />
        </button>
        <br/>
        <input
          id='image'
          type='file'
          onChange={handlefile}
        />
         <input
            value={params.electionName}
            placeholder='Election Name'
            required
            readOnly
        />
         <input
            value={params.partylistName}
            placeholder='Partylist Name'
            required
            readOnly
        />
        <input
            value={name}
            placeholder='Candidate Name'
            required
            readOnly
        />
        <input
            value={course}
            placeholder='Candidate Course and Year'
            required
            readOnly
        />
        <input
            value={address}
            placeholder='Candidate Address'
            required
            readOnly
        />
        <select onChange={(e)=>{setPositionValue(e.target.value)}}>
            <option>Select a position</option>
          {position.map((position)=>{
            return(
              <option value={position.Position}>{position.Position}</option>
            )
          })}
        </select>
        <button id='create' onClick={SubmitForm}>
            Done
        </button>
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
width:100.5vw;
top:-5vh;
left: -10vw;
background-color: rgba(0,0,0,0.5);
color: black;
`

const Wrapper = styled.div` 
box-shadow: 5px 5px lightblue;
position: absolute;
border: 2px solid #293846; 
border-radius: 5px;
height: 90vh;
width:35vw;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgb(231, 231, 231);
color: black;

#h1{    
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 2.2rem;
    margin-top: 1rem;
    padding-bottom:1rem;
  }

  input{
    width: 50%;
    height: 40px;
    margin-left: 1vw;
    border: 2px solid #293846;
    margin-top:0.5rem; 
  }

  #image{
    border: none;
  }
  input::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    
  }

  select{
    width: 50%;
    height: 40px;
    margin-left: 1vw;
    border: 2px solid #293846;
    margin-top:0.5rem; 
  }

  select::placeholder{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    
  }

  #create{
    position: absolute;
    width: 50%;
    left: 9.3vw;
    height: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    margin-top: 3.5rem;
    color: black;
    font-size: 1rem;
    border-color;
    border: 1px solid;
    border-radius: 6px;
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    cursor: pointer;
  }

  #searchbtn{
    margin-left: -8.4rem;
    margin-top: 0.5rem;
    border-radius: 0px;
    width:5.5rem;
    padding:1px;
    height: 1.5rem;
    font-size: 0.rem;
    border: 1px solid black;
  }

  #searchbtn:hover{

  }

  button:hover{
    border: 1px solid black;
  }
`

export default ModalCandidates