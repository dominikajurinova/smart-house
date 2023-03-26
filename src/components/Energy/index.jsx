import React from 'react';
import './style.css'; 
import drop from '../../img/water.svg';
import lightening from '../../img/electricity.svg';

const Energy = ({ electricity, water }) => { 
    return (
        <div className="energy">
          <img className="energy__icon energy__icon img" src={lightening} alt="Electricity" />
          <p>Elektřina {electricity} kW</p>
          <img className="energy__icon energy__icon img" src={drop} alt="Water" />
          <p>Voda {water} m<sup>3</sup></p>  
        </div>
    );
  };
  
export default Energy;