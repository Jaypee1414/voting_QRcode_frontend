import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
function ElectionData() {
    const [election, setElection] = useState([]);
      useEffect(()=>{
          Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Election").then(res =>{
          setElection(res.data)
          console.log(res.data)
          }).catch(err=>{
            console.log(err);
        })
        },[]);
  
  return (
    <div>
        <Grid>
            {election.map((info)=>{
            return(
                <Card>
                    <Link to={'/Election/' + info.Election_id}>
                      <h2>{info.ElectionName}</h2>
                      <h4>{info.ElectionYear}</h4>
                    </Link>
                </Card>
            )
            })}
        </Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: rem;
  background-color: rgba(0,0,0,0.3);
  width: 80.8vw;

`;

const Card = styled.div`
position: relative;
width: 17vw;
padding: 2rem;
border: 2px solid #293846;
margin: 1rem;
height: 25vh;
border-radius: 5px;
background-color: #282c34;
color: #f0f8ff;
box-shadow: 5px 5px lightblue;
h2{
    
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width:100%;
    font-size: 1.8rem;
    color: aliceblue;
    position: absolute;
    left: 0;
    top: 0;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #73b504;
    text-shadow: 1px 1px black;
}  
h4{
    text-align: center;
    font-size: 1.1rem;
    left: 0;
    position: absolute;
    bottom: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    width:100%;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: yellow;
}
 `


export default ElectionData