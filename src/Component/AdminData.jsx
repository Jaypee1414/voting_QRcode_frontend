import React from 'react'
import {FaHome} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {PiNoteDuotone,PiNotePencilBold} from 'react-icons/pi'
import { BiLogOut } from "react-icons/bi"
import {FaWpforms} from 'react-icons/fa6'
import BackgroundImage from '../image/sccadmin.png'


export const AdminData=[
    {
        img: BackgroundImage,
        link: "/AdminHome"
    },
    {
        title: "Election",
        icon: <PiNoteDuotone/>,
        link: "/Election"
    },
    {
        title: "Tally of Votes",
        icon: <FaWpforms/>,
        link: "/TallyVotes"
    },
    {
        title: "Create Election",
        icon: <PiNotePencilBold/>,
        link: "/CreatedElection"
    }, 
    {
        title: "Logout",
        icon: <BiLogOut/>,
        link: "/Login"
    }

]