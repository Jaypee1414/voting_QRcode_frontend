import React from 'react'
import { useState, useContext, useEffect} from 'react'
import  Axios  from 'axios';
import QRCode from 'react-qr-code'
import { styled } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from './Pages';
import gradientColor from '../image/background.jpg'


function Register(){
    let [studentInfo, setStudentInfo] = useState([]);
    const [info, setInfo] = useState([]);
    const [course, setCourse] = useState("");
    const [schoolId, setSchoolId] = useState("");
    const [Name, setName] = useState("");
    const [address , setAddress] = useState("");
    const [number , setNumber] = useState();
    const [studentnumber , setStudentNumber] = useState();
    const [familyname , setFamilyName] = useState("");
    const [guardianAddress ,setGuardianAddress] = useState("");

    const navigate = useNavigate(); 
    let dataArray=[];

    const register = () =>{
        Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/Register", {
            schoolID: schoolId,
            fullname: Name,
            address: address,
            course: course,
            studentNumber: studentnumber,
            guardianNumber: number,
            guardianFullname: familyname,
            guardianAddress: guardianAddress
            }).then((response)=>{
              alert("Student Not Save")
            })
            alert("Save Student Info Successful");
            deleteStudent();
            navigate("/Register");
      }
    
    const deleteStudent =()=>{
      Axios.delete('https://mysql-sccians-9d8935734292.herokuapp.com/delete/'+schoolId)
      .then(res =>{
        window.location.reload();
      }).catch(err => console.log(err))
      alert("Delete Student Successful");
    }

    useEffect(()=>{
      Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/PreRegister").then(res =>{
      setStudentInfo(res.data);
      }).catch(err=>{
        console.log(err);
    })

    },[]);
     

  return(
    <div>
      {/* <h1 id='title'>ID SECTION</h1>   */}
      <Wrapper>
      <img src={gradientColor} alt="" id='image'/>
        <input 
          type='text' 
          value={schoolId}
          onChange={(e)=>setSchoolId(e.target.value)}
          placeholder='Input your School ID'
        />
        <br/>
        <input 
          type='text'  
          value={Name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Input your name'
        />
        <br/>
        <input 
          type='text'  
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          placeholder='Address'
        />
        <br/>
        <input 
          type='text' 
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
          placeholder='Course'
        />
        <br/>  
        <input 
          type='text' 
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
          placeholder='Number'
        />
        <br/>
        <input 
          type='text' 
          value={studentnumber}
          onChange={(e)=>setStudentNumber(e.target.value)}
          placeholder='Guardian Number'
        />
        <br/>
        <input 
          type='text' 
          value={familyname}
          onChange={(e)=>setFamilyName(e.target.value)}
          placeholder='Guardian Fullname'
        />
        <br/>
        <input 
          type='text' 
          value={guardianAddress}
          onChange={(e)=>setGuardianAddress(e.target.value)} 
          placeholder='Guardian Address'
        />
        <br/>
        <br/>
        <Button>
        <button onClick={register}>
          Save
        </button>
        <button onClick={deleteStudent}>
          delete
        </button>
        </Button>
        <div id='box'>
        <QRCode id='qrcode' value={`{"StudentID": "${schoolId}","StudentName":"${Name}","Course":"${course}","Address":"${address}","Contact Number":"${number}","Guardian Number":"${studentnumber }","Guardian Name":"${familyname}","Guardian Address":"${guardianAddress}"}`}/>
        </div>


        {/* <QRCode id='qrcode' value={`{"StudentID": "${schoolId}","StudentName":"${Name}","Course":"${course}","Address":"${address}","Contact Number":"${number}"}`}/> */}
        <br/>
      </Wrapper>

    <Tableinfo>
    <h2>Student Register</h2>
    {studentInfo.map((info)=>{
        return(
          <div id='scroll'>
            <Link id='link' onClick={()=>{
              setSchoolId(info.schoolID)
              setName(info.fullname)
              setAddress(info.address)
              setCourse(info.course)
              setNumber(info.studentnumber)
              setStudentNumber(info.guardiannumber)
              setFamilyName(info.guardianfullname)
              setGuardianAddress(info.guardianaddress)

            }}>
              <div id='object'>
               <h3>{info.schoolID}, {info.fullname}</h3>
              </div>
            </Link>
            
          </div>
        )
      })}
    </Tableinfo>
    </div> 
  )
} 

const Wrapper = styled.div`
position: absolute;
right: 0;
border-left: 2px solid black;
width: 65%;
height: 30rem;
margin-top:6rem;
margin-right: 3rem;

#image{
  left: -90%;
  z-index: -1;
  position: absolute;
  top: -100px;
  width: 126.5vw;
  height: 100vh;
  filter: blur(8px);
  -webkit-filter: blur(2px);
}
#qrcode{
  position: relative;
  top: 10px;
  right: 0px;
  width: 78%;
  height: 300px;
}

#box{
  border-radius: 20px;
  position: absolute;
  background-color: white;
  position: absolute;
  top: 58px;
  width: 40%;
  height: 320px;
  right: 0.5rem;
}

input{
  border: 0.1;
  margin-left: -350px;
  position: relative;
  width: 50%;
  margin-top:0.5rem;
  height: 3rem;
  border-bottom: 1px solid black;
}
`

const Button = styled.div`
position: absolute;
right: 0;
width: 100%;
margin-right: 8.5rem;
margin-top: -4rem;

button{
  height: 2rem;
  width: 10%;
  position: relative;
  background: transparent;
  border-radius: 30px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  padding: 0.25em 1em;
  left: 50%;
  right: 50%; 
  top: 73%;
  transform: translate(-50%, -50%);
  background: linear-gradient(35deg, #494949, #313131);
  border: black;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  margin-left: 0.5rem;
  
  &:hover{
    cursor: pointer;
    background: black;
  }
}

`

const Tableinfo = styled.div`
position: absolute;
top:0;
margin-top: 1rem;
margin-left: 0.5rem;
width:31.8%;
border-radius: 3px;
height:600px;
border: 1px solid black;
overflow-y: scroll;
overflow: hidden;
background-color: aliceblue;

#link{
  text-decoration: none;
}

h2{
  padding: 1.3rem;
  color: white;
  background-color: #282c34;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h3{
  color: black;
  margin-left: 1.5rem;
  letter-spacing: 0.2px;
  padding: 0.6rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

`
export default Register