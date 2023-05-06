import React from 'react'
import './nav.css'
import {SiGooglehome} from 'react-icons/si'
import {TfiUser} from 'react-icons/tfi'
import {BiBook} from 'react-icons/bi'
import {RiFoldersLine} from 'react-icons/ri'
import {TbMessage} from 'react-icons/tb'




const nav = () => {
  return (
    <nav>
      <a href="#"><SiGooglehome/></a>
      <a href="#about"><TfiUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><RiFoldersLine/></a>
      <a href="#contact"><TbMessage/></a>
    </nav>
  )
}

export default nav