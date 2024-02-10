import  Axios  from 'axios';
import { useEffect, useState,createContext } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import gradientColor from '../image/background.jpg'

function Form({callBack}){
    

    const navigate = useNavigate();
    const [schoolID , setSchoolID] = useState("");
    const [fullname , setFullname] = useState("");
    const [address , setAddress] = useState("");
    const [course , setCourse] = useState("");
    const [number , setNumber] = useState();
    const [studentnumber , setStudentNumber] = useState();
    const [familyname , setFamilyName] = useState("");
    const [guardianAddress ,setGuardianAddress] = useState("");

    const studentInfo = {
        schoolID: schoolID,
        fullname: fullname,
        address: address,
        course: course,
        number: studentnumber,
        GuardianNumber: number,
        familyname: familyname,
        GuardianAddress: guardianAddress
    }


    const PreRegister = () =>{
      Axios.post("https://mysql-sccians-9d8935734292.herokuapp.com/PreRegister", {
            schoolID: schoolID,
            fullname: fullname,
            address: address,
            course: course,
            studentNumber: studentnumber,
            guardianNumber: number,
            guardianFullname: familyname,
            guardianAddress: guardianAddress
            }).then((response)=>{
                console.log(response);
              })   
            // clear();
            alert("Registered Successful")
            window.location.reload();
    }

    const clear =()=>{
      setSchoolID('');
      setFullname('');
      setAddress('');
      setCourse('');
      setNumber('');
      setStudentNumber('');
      setFamilyName('');
      setGuardianAddress('');
    }

  return (
    <BodyWrap>
      <img src={gradientColor} alt="" id='image'/>
      <Wrapper>
          <h1>Personal Information</h1>
          <input 
            type='text' 
            placeholder='Enter Your School ID'
            // value={schoolID}
            onChange={(e) => setSchoolID(e.target.value)}
            required
      
          />
          <br/>
          <input 
            id="password"
            type='text' 
            // value={fullname}
            placeholder='Enter Fullname (FN, MI, LN)'
            onChange={(e) =>setFullname(e.target.value)}
            required
          />
          <br/>
          
          <input 
            id="address"
            type='text'
            // value={address}
            placeholder='Enter Your Address'
            onChange={(e) =>setAddress(e.target.value)}
            required
          />
          <br/>
          
          <input 
            id="course"
            type='text'
            // value={course}
            placeholder='Enter Your Course (eg. BSIT-4)'
            onChange={(e) =>setCourse(e.target.value)}
            required
          />
          <br/>

          <input 
            id="contactnumber"
            type='number' 
            // value={studentnumber}
            placeholder='Contact Number'
            onChange={(e) =>setStudentNumber(e.target.value)}
            required
          />
          <br/>
      </Wrapper>

      <Wrappertwo>
          <h1>In case of Emergency</h1>
          <input 
            type='number' 
            // value={number}
            placeholder='Guardian Contact Number'
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <br/>
          <input 
            id="password"
            type='text' 
            // value={familyname}
            placeholder='Guardian Fullname'
            onChange={(e) =>setFamilyName(e.target.value)}
            required
          />
          <br/>
          
          <input 
            id="address"
            type='text' 
            placeholder='Guardian Address'
            // value={guardianAddress}
            onChange={(e) =>setGuardianAddress(e.target.value)}
            required
          />
          <br/>

          <button onClick={PreRegister}>
            DONE
          </button>
          <br/>
      </Wrappertwo>
    </BodyWrap>
  )
}


const BodyWrap = styled.div`
  position: relative; 

  @media only screen and (max-width: 767px){
    position: relative; 
    width: 100%;
    height: 600px;
    
  }

  #image{
    width: 99.5vw;
    height: 99.4vh;
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 27%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 50%;
  height: 35rem;
  background-color: white;

  h1{ 
    margin: 2.5rem;
    font-size: 2rem;

  }
  button{
    height: 3rem;
    width: 70%;
    position: absolute;
    background: transparent;
    border-radius: 3px;
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
    
    &:hover{
      cursor: pointer;
    }

  }

  p{
    position: absolute;
    color: black;
    text-decoration: underline;
    left: 40%;
    right: 50%; 
    top: 83%;
    width: 50%;
    transform: translate(-50%, -50%);

    &:hover{
      cursor: pointer;
      color: blue;
    }
  }

  input{
    position: absolute;
    width: 50%;
    height: 3rem;
    left: 50%;
    right: 50%; 
    top: 25%;
    transform: translate(-50%, -50%);
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
  }

  #password{
    margin-top: 4.5rem;
  }
  #address{
    margin-top: 9rem;
  }
  #course{
    margin-top: 13.5rem;
  }
  #contactnumber{
    margin-top: 18rem;
  }

  @media only screen and (max-width: 767px){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    width: 100%;
    height: 25rem;
  
    input{
      position: absolute;
      width: 70%;
      height: 3rem;
      left: 50%;
      right: 50%; 
      top: 35%;
      transform: translate(-50%, -50%);
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid black;
    }
  
    h1{ 
      margin: 2.5rem;
      font-size: 2rem;
  
    }
    button{
      height: 3rem;
      width: 70%;
      position: absolute;
      background: transparent;
      border-radius: 3px;
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
      
      &:hover{
        cursor: pointer;
      }
  
    }
  
    p{
      position: absolute;
      color: black;
      text-decoration: underline;
      left: 40%;
      right: 50%; 
      top: 85%;
      width: 70%;
      transform: translate(-50%, -50%);
      margin-left: 2rem;
      &:hover{
        cursor: pointer;
        color: blue;
      }
    }
  
    #password{
      margin-top: 4.5rem;
    }
    
  }
  `
  
const Wrappertwo = styled.div`
position: absolute;
top: 50%;
left: 75%;
transform: translate(-50%, -50%);
border: 1px solid black;
width: 45%;
height: 35rem;
background-color: white;

h1{ 
  margin: 2.5rem;
  font-size: 2rem;

}
button{
  height: 3rem;
  width: 50%;
  position: absolute;
  background: transparent;
  border-radius: 3px;
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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  &:hover{
    cursor: pointer;
  }

}

p{
  position: absolute;
  color: black;
  text-decoration: underline;
  left: 40%;
  right: 50%; 
  top: 83%;
  width: 50%;
  transform: translate(-50%, -50%);

  &:hover{
    cursor: pointer;
    color: blue;
  }
}

input{
  position: absolute;
  width: 50%;
  height: 3rem;
  left: 50%;
  right: 50%; 
  top: 25%;
  transform: translate(-50%, -50%);
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
}

#password{
  margin-top: 4.5rem;
}
#address{
    margin-top: 9rem;
}

@media only screen and (max-width: 767px){
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 100%;
  height: 25rem;

  input{
    position: absolute;
    width: 70%;
    height: 3rem;
    left: 50%;
    right: 50%; 
    top: 35%;
    transform: translate(-50%, -50%);
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
  }

  h1{ 
    margin: 2.5rem;
    font-size: 2rem;

  }
  button{
    height: 3rem;
    width: 70%;
    position: absolute;
    background: transparent;
    border-radius: 3px;
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
    
    &:hover{
      cursor: pointer;
    }

  }

  p{
    position: absolute;
    color: black;
    text-decoration: underline;
    left: 40%;
    right: 50%; 
    top: 85%;
    width: 70%;
    transform: translate(-50%, -50%);
    margin-left: 2rem;
    &:hover{
      cursor: pointer;
      color: blue;
    }
  }

  #password{
    margin-top: 4.5rem;
  }
  
}
`

export default Form