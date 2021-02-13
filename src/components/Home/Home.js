import React from 'react';
import {Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import BgHome from '../BgHome';
import './Home.css'


const Home = () => {
  // const history = useHistory()
  return (  <div>
<BgHome backgroundImage='https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'>
      {/* <h2>Click HERE!</h2> */}
    </BgHome> 
  </div>
    // <div onClick={() => history.push('/about')}></div>
 
    
  );
};

export default Home;

{/* <img style={{width: 1270, maxHeight: '60%'}} className='homeImg' src={washer} alt="washingMachine"/> */}
{/* style={{border: 'solid green 1px', width: 200, height: 60, color:'black', opacity: '', top: 300, marginLeft: 590, position: 'relative', backgroundColor: 'transparent'}} */}
{/* <div onClick={() => history.push('/about')} style={styles.container}>
  <div  className='divText'>
    <Card>
    <Card.Body>
      <Card.Text>
        <h2>
        Click Me!
        </h2>       
      </Card.Text>
    </Card.Body>
    </Card>
  </div>
</div> */}

//   const washer = 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//   const styles = {
//     container: {
//         backgroundImage: `url(${washer})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//         width: '100vw',
//         height: '100vh',
//         margin: 0
       
//     }