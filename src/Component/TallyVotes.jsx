import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

function TallyVotes() {
  return (
    <div>
        <Grid>
            <Card>
               <h2 id='header'>TallyVotes</h2>
            </Card>
        </Grid>
    </div>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
grid-gap: rem;
background-color: rgba(0,0,0,0.3);
width: 80.2vw;
position: absolute;
top: 73vh;

`;

const Card = styled.div`
position: relative;
width: 40vw;
padding: 2rem;
border: 2px solid #293846;
margin: 1rem;
margin-left: 16rem;
height: 70vh;
border-radius: 5px;
background-color: #73b504;
box-shadow: 5px 5px lightblue;
#header{
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
export default TallyVotes