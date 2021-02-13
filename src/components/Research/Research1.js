import React from 'react';
import {Card } from 'react-bootstrap'
import './Research.css'
import { useHistory } from 'react-router-dom';
const drum = 'https://living.homeserve.com/wp-content/uploads/2020/10/washing-machine-featured.jpg'
const styles = {
  researchBg1:  {
    backgroundImage: `url(${drum})`,
    height: '135vh',
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
const Research1 = () => {
  const history = useHistory()
  return (
<div onClick={() => history.push('/research2')}  style={styles.researchBg1}>    
<section className='section'>
  <Card className='cardText'>
   <Card.Header>
   <h4 >
  How would a washing machine that recognizes washing tags make doing laundry easier?
  </h4>
  <h5>Essential Question</h5>
   </Card.Header>
  <Card.Body>
    <Card.Text>   
        <p>
        We've all been there: you have a big pile of laundry, little time and patience to do it, and you've been procrastinating for a week. The time you have to spend sorting the clothes and, if you're the careful type, looking through the tags for the washing instructions and little symbols that few people even know the meaning of is enough to dissuade you from the task. Wouldn't it be easier if the machine could do it for you?
        </p>
        <p>
        What if a washing machine could recognize the symbols on the tags and determine the right temperature and spin for you and all you had to do was sort by color (and show the machine the symbols)? In my opinion, it would make it a whole lot easier. That's why I decided to make this year's STEMposium project Research such a washing machine.
        </p>
        <p>
        This washing machine would have a small, floor-facing camera attached above the drum door (washing door) that would capture pictures of the tags (and, subsequently, the symbols). This camera would be connected to the washing machine's power; henceforth, when the washing machine would be off, the camera would be as well. The pictures from the camera would be used by image/pattern recognition software to determine the symbols and their meanings. The number and type of symbols introduced would thus determine the temperature and spin for that laundry load by taking an average of all the temperatures and spins to find the optimal cycle.
        </p>
        <p>
        The human using the washing machine would still be able to adjust the spin and temperature if they saw fit using the same mechanisms as a normal washing machine; however, the interface would look a little different in order for the machine to exhibit its decidedly optimal cycle.
        </p>
        <p>
        All in all, this washing machine would determine the optimal cycle for you, the human procrastinating on laundry, which would certainly make one step easier (and you more likely to do it).
        </p>
        <p>
        This whole idea wouldn't be of any use to anyone who just throws the laundry in, adds whatever detergent, chooses a random cycle, and hits start. However, if you’re new to laundry, this would be a great machine for you.
        </p>
    </Card.Text>
    </Card.Body>  
      
    <Card.Header>
   <h4>
   Will washing tags still be relevant in the future?
  </h4>
  <h5>Research Question: Futuristic</h5>
   </Card.Header>
   <Card.Body>
    <Card.Text>
        <p>
        According to an article from  just-style.com found in the library Gale database, it seems that washing tags might not be as relevant in the future as I had once thought : "As part of its ongoing review of care labelling requirements for clothing sold in the United States, the Federal Trade Commission has again been told the need for a physical label is no longer necessary" (2).Though in the future these tags will be removed, until the day when clothes no longer have physical labels and have transferred to “digital labels”, this washing machine prototype could still be relevant (2). But, as information methods change, this service could become obsolete, even if it were transferred to an app platform as the physical tags would be removed.  </p>
        <p>
        There could, however, be an app that would find the washing instructions then perform the same function of determining the optimal cycle as this washing machine prototype. Though, this would be a different innovation (or possible iteration of this current prototype).
        </p>
    </Card.Text>
  </Card.Body>    
     
 </Card>
</section>

    </div>
  )
}
    

export default Research1;

//https://living.homeserve.com/wp-content/uploads/2020/10/washing-machine-featured.jpg
//https://images.unsplash.com/photo-1583382525248-bcbc20a7a79a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdhc2hlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
 {/* for h4 */}
  {/* style={{display: 'inline', clear: 'none'}} className='font-weight-light' */}
  {/* style={{fontSize: 20, display: 'inline',  clear: 'none'}}> */}

     {/* Essential Question: {' '}<span style={{float:'right', paddingRight:300}}>How would a washing machine that recognizes washing tags make doing laundry easier?</span> */}
  {/* <Card.Title style={{textAlign:'center'}}>  
  
  <h4>
  How would a washing machine that recognizes washing tags make doing laundry easier?
  </h4>
  <h5>Essential Question</h5>
  </Card.Title> */}