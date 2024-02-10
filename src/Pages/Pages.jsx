import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Home from '../Component/Home'
import Vote from '../Component/Vote'
import Admin from './Admin'
import Form from './Form'
import AdminHome from './AdminHome';
import Election from './Election';
import Property from './Property'
import CreatedElection from './CreatedElection';
import UserLogin from './UserLogin';
import Partylist from './Partylist';
import PartylistData from '../Component/PartylistData';
import Candidates from './Candidates';
import TallyVotes from './Tally'
import Profile from './Profile';
import { useState,createContext } from 'react'
export const AppContext = createContext();

function Pages() {
  return (
      <div>
          <Routes>
              <Route path='/' element={<UserLogin/>}/>
              <Route path='/UserLogin' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/AdminHome' element={<AdminHome/>}/>
              <Route path='/UserLogin/Vote/:schoolID' element={<Vote/>}/>
              <Route path='/Login' element={<Admin/>}/>
              <Route path='/Form' element={<Form/>}/>
              <Route path='/Election' element={<Election/>}/>
              <Route path='/CreatedElection' element={<CreatedElection/>}/>
              <Route path='/Election/:id' element={<Partylist/>}/>
              <Route path='/Election/:electionName/:partylistName' element={<Candidates/>}/>
              <Route path='/TallyVotes' element={<TallyVotes/>}/>
              {/* <Route path='/Profile' element={<Profile/>}/>; */}
          </Routes>
      </div>
  )
}

export default Pages