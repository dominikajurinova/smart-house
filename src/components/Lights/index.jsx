import React from 'react';
import './style.css'; 
import Light from '../Light';

const Lights = ({lights}) => {
    return (
        <div className="lights">
          {lights.map((light, index) => (
            <Light 
            key={index} 
            name={light.name} 
            status={light.state}/>
          ))}
          
        </div>
    );
  };
  
export default Lights;

