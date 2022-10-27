import React from 'react'
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import './componentStyle.css'

const Menu = () => {
  return (
    <div className="menu">
    <a href="https://youtube.com" className="social">
      <BsYoutube color="#FFF" size={24} className="menu-link" />
    </a>
    <a href="https://instagram.com" className="social">
      <BsInstagram color="#FFF" size={24} />
    </a>
  </div>
  )
}

export default Menu