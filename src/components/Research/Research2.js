import React from 'react';
import {Card } from 'react-bootstrap'
import './Research.css'
import { useHistory } from 'react-router-dom';
const drum = 'https://living.homeserve.com/wp-content/uploads/2020/10/washing-machine-featured.jpg'
const styles = {
  researchBg2:  {
    backgroundImage: `url(${drum})`,
    height: '130vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },  
}
const Research2 = () => {
  const history = useHistory()
return (
    <div onClick={() => history.push('/prototype')} style={styles.researchBg2}>    
<section className='section'>
<div>
  <Card className='cardText'>
   <Card.Header>
   <h4>Would the cameras on these washing machines be a breach of privacy?</h4>
  <h5>Research Question: Ethical</h5>
   </Card.Header>
  <Card.Body>
    <Card.Text>    
    <p>
  There might be concerns Research privacy when it comes to these new washing machines (because of the inclusion of the camera and this washing machine being part of the Internet of Things), but there is nothing to worry Research. The camera would be floor facing, meaning that it could only see what is under it, and it would be rather small. It would also be connected to the washing machine's power, meaning that if the washing machine was off, the camera would be too. Along with this, the camera would be turned off when the washing machine is completing a cycle. Thus the only times it could capture anything would be when the washing machine would be on and not performing a cycle. And as an added level of security, there will be a little button that allows the human to turn off the camera whenever they so wish.
  </p>
  <p>
  That being said, the camera would not necessarily be a breach in privacy as there are measures in place to protect the user from any possible mining of information (not that there would be anything of value to mine from a small floor-facing camera that is for the most part turned off).
  </p>
  <h5>
  Other Privacy Concerns: 
  </h5>
  <p>
  This washing machine would be part of the Internet of Things— “a concept [that] focuses on how computers, sensors, and objects interact with each other and collect information relating to their surroundings ” and “are connected to the Internet”(3). Furthermore “the connected devices operate on embedded sensors that automatically measure and transfer data over a network to data stores without human interaction” and “ these data stores interact with analytic engines [(analysis programs)] to collect and provide data that can be acted upon”(3).  

  </p>
  <p>
  This may bring up new privacy concerns such as the washing machine being “hacked and controlled by third-parties” or “hacked [and] personal information being shared, sold, or used” or something as expected as the washing machine “simply malfunction[ing]” (3). Some of these seem a bit silly when it comes to a washing machine, but they will be addressed nonetheless. 
  </p>
  <p>
  First, the concern of the washing machine being “hacked and controlled by third parties”(3). I have no clue who would want to do that, but in the case that someone does, it could be a bit… concerning. First and foremost, the only function in the machine that could be controlled by the backend would be the washing settings,  not if it was turned on, off, or anything else. That would mean that even if someone decided to hack a washing machine when they got bored, the only thing they could do would be change the temperature, spin, and maybe the running time. This would be a mean prank, but, past that, a hacker can’t really do much. 
  </p>
  <p>
  Second, onto the matter of the washing  machine being hacked and personal information being stolen. As before, this seems a little silly, but it could be a valid concern someone might have. To address it, I wish to state again that the washing machine’s only source of input that is being “actively” catalogued and used by the backend program is the camera. This being said, the pictures would be of washing tags and the camera’s state could only be controlled through the washing machine and not the program the washing machine would connect to. Thus, the only information that could be stolen by a hacker would be the data about the kinds of washing symbols introduced and the optimal cycles proposed. 
  </p>
  <p>
  Lastly, the most common issue to be addressed with all technologies: malfunctioning. This is one that can hardly be prevented, but it can be planned for. For the moment, however, this is an area where I need to continue iterating my prototype. 
  </p>
    </Card.Text>
  </Card.Body>         
 </Card>
</div>
</section>

    </div>
  );
}
export default Research2;

//https://living.homeserve.com/wp-content/uploads/2020/10/washing-machine-featured.jpg
//https://images.unsplash.com/photo-1583382525248-bcbc20a7a79a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdhc2hlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
 {/* for h4 */}
  {/* style={{display: 'inline', clear: 'none'}} className='font-weight-light' */}
  {/* style={{fontSize: 20, display: 'inline',  clear: 'none'}}> */}
