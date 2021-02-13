import React from "react";
import Hero from "../components/Hero";
import { useHistory } from 'react-router-dom';
 
const About = () => {
  const history = useHistory()
  return(
<div onClick={() => history.push('/research1')}>
    <Hero backgroundImage="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">    
      <h2>Click On The Door!</h2>
    </Hero>
  </div>
  )
}
  

export default About;
