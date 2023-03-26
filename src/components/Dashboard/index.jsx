import React from 'react';
import './style.css'; 
import Lights from '../Lights';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';
import house from '../../img/house.jpg';

const Dashboard = ({data}) => {
    return (
        <div className="dashboard" style={{ backgroundImage: `url(${house})` }}>
          <Lights lights={data.lights}/>
          <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
          <Blinds blinds={data.blinds}/>
          <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}/>
        </div>
    );
  };
  
export default Dashboard;