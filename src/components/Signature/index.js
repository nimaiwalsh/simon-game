import React from 'react';
import './styles.css';
import Github from 'react-icons/lib/fa/github'
import Linkedin from 'react-icons/lib/fa/linkedin'
import Twitter from 'react-icons/lib/fa/twitter'
import Home from 'react-icons/lib/fa/home'

const Signature = () => {
  return (
    <div className="Signatures">
      <ul>
        <li><a href="http://nimaiwalsh.com" target="_blank" rel="noopener noreferrer"><Home /></a></li>  
        <li><a href="https://github.com/nimaiwalsh" target="_blank" rel="noopener noreferrer"><Github /></a></li>  
        <li><a href="https://linkedin.com/in/nimaiwalsh" target="_blank" rel="noopener noreferrer"><Linkedin /></a></li>  
        <li><a href="https://twitter.com/nimaiwalsh" target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
      </ul>
    </div>
  )
}

export default Signature;