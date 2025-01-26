import React from 'react'
import logo from '../images/logo.jpg'

function Header() {
  return (
<div className='container_header'>
      <div className="container-title">
      <img src={logo} alt="Company Logo" className='img_logo'/>

      <ul>
        <li><a href="#" class="ga-nav">Customize Your Project</a></li>
        <div className="dropdown">
        <li><a href="#" class="ga-nav ">Courses</a>
        <div className='dropdown-content'>
        <a href="#">Java</a>
    <a href="#">Python</a>
    <a href="#">React JS</a>
    <a href="#">Machine Learning</a>
    <a href="#">HTML</a>
    <a href="#">CSS</a>
        </div>
        </li>
        </div>
        <div className="dropdown">
        <li><a href="#" class="ga-nav">Program</a>
        <div className='dropdown-content'>
        <a href="#">Web Application</a>
    <a href="#">Android Application</a>
    <a href="#">Desktop Application</a>
    <a href="#">ERP</a>
        </div>
        </li>
        </div>
        <li><a href="/about" class="ga-nav">About Us </a></li>
        <li><a href="#" class="ga-nav">Contact Us</a></li>
        </ul>
        </div>
      </div>
  )
}

export default Header