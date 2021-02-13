import React from 'react';
import './BgHome.css'

const BgHome = (props) => {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    </div>
  );
};

export default BgHome;