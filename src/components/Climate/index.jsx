import React, {useState} from 'react';
import './style.css'; 
import temp from '../../img/temp.svg';

const Climate = ({ temperature, humidity }) => {
    const [temperatureState, setTemperature] = useState(temperature);

    const increaseTemperature = () => {
      setTemperature(temperatureState + 1);
    };

    const decreaseTemperature = () => {
      setTemperature (temperatureState - 1);
    };

    return (
        <div className="climate climate__content">
          <div className="climate__temperature">
            <img className="climate__icon img" src={temp} alt= "Temperature" />
            <div> {temperatureState} °C</div>
            <div className="climate__controls">
              <button className="climate__controls button:first-child" onClick={increaseTemperature}>+</button>
              <button className="climate__controls button:last-child" onClick={decreaseTemperature}>-</button>
            </div>  
          </div>
          <div>
            <p>Vlhost vzduchu {humidity} %</p>
          </div>
        </div>
    );
  };
  
export default Climate;