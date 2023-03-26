import React, {useState} from 'react';
import './style.css'; 
import lightOn from '../../img/light-on.svg';
import lightOff from '../../img/light-off.svg';

const Light = ({name, state}) => {
    const [lightState, setLightState] = useState(state);

    const toggleLight = () => {
      setLightState(lightState === 'on' ? 'off' : 'on');
    }
    
    return (
        <div className="light" onClick={toggleLight}>
          <img className="light__icon light__icon img" src={lightState === 'on' ? lightOn : lightOff} alt="light" />
          <div className="light__name">{name}</div>
        </div>
    );
  };
  
export default Light;