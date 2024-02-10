import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import '../App.css';
function ProfileData() {
  return (
<section id="content" className='print-container'>
    <main>
        <div class="table-data">
            <div class="order">
                <div class="head">
                    <table>
                        <tr>
                            <th><td>School ID</td></th>
                            <th><td>Name</td></th>
                            <th><td>Course</td></th>
                            <th><td>Address</td></th>
                            <th><td>Contact No.</td></th>
                        </tr>

                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</section>
  )
}
const BodyWrap = styled.div`
right: 0;
position: absolute;
width:84%;
height: 100vh;
#head{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.5rem;
    background-color: #282c34;
    color: #f0f8ff;
    letter-spacing: 3px;
    width: 100vw;
    height: 10vh;
    display: flex;
    padding-left: 20px;
    align-items: center;
}

button{
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
    margin-top: 120px;

}

button:hover{
    color: #ffffff;
    background-color: #0366d6;
    border-color: #1b1f2326;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}

#NewIcon{
    margin: 0 0.5rem;
    position: absolute;
    font-size: 2rem;
    color: white;
    border: 1px black;
    margin-top: 120px;
}


#NewIcon:hover{
    color: #0366d6;
    border-color: black;
    box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
    transition-duration: 0.1s;
}



`
export default ProfileData