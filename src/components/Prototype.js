import React from 'react';
import {Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
const drum = 'https://living.homeserve.com/wp-content/uploads/2020/10/washing-machine-featured.jpg'
const styles = {
  prototypeBg:  {
    backgroundImage: `url(${drum})`,
    height: '100h',
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
const Prototype = () => {
  const history = useHistory()
  return (

<div onClick={() => history.push('/bibliography')} style={styles.prototypeBg}>
  {/* <section > */}
  <Card style={{margin:'auto', opacity:'1', width:850, height:650}}>
 
  <Card.Img style={{ margin:'auto', width: 800, height: 600}} src="https://lh3.googleusercontent.com/-kupnPienn3U/YCccHcU_b3I/AAAAAAAADXU/LddtT6ZRb_8zLVcJtr6w5GsjiTpL01MJACK8BGAsYHg/s0/2021-02-12.jpg" alt="prototype"></Card.Img>
  {/* <Card.Body>
  <Card.Text> 

    </Card.Text> 
    </Card.Body> */}
</Card>
  {/* </section> */}

</div>


    
  );
};

export default Prototype;
{/* <div style={{width: 500, height: 400}} className='card border-0 shadow my-2'>
    <div className='card-body p-5'>
      <img style={{ margin:'auto', width: 800, height: 600}} src="https://lh3.googleusercontent.com/-kupnPienn3U/YCccHcU_b3I/AAAAAAAADXU/LddtT6ZRb_8zLVcJtr6w5GsjiTpL01MJACK8BGAsYHg/s0/2021-02-12.jpg" alt="prototype"/>
    </div>
    </div> */}