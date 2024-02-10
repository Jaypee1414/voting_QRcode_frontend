import React from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { Link,useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function PartylistData(){
  let params = useParams();
  const [partylist, setPartylist] = useState([]);

  useEffect(()=>{
      Axios.get("https://mysql-sccians-9d8935734292.herokuapp.com/Partylist/" + params.id).then(res =>{
      setPartylist(res.data)
      }).catch(err=>{
        console.log(err);
    })
    },[]);

  return (
    <div>
       <Grid>
            {partylist.map((info)=>{
            return(
                <Card>
                    <Link to={ window.location.pathname + '/' + info.partylistName}>
                      <h2>{info.partylistName}</h2>
                      <h4>{info.partylistLead}</h4>
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
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 0rem;
  width: 60.2vw;
  position: absolute;
  top: 50;
  left: 50;
  transform: translate(15%,20%);

`;

const Card = styled.div`
position: relative;
width: 17vw;
padding: 2rem;
border: 2px solid #293846;
margin: 1rem;
height: 25vh;
border-radius: 5px;
background-color: #293846;
box-shadow: 5px 5px lightblue;
h2{
    
    font-family: cursive;
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
export default PartylistData