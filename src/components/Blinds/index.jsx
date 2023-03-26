import React, {useState} from 'react';
import './style.css'; 
import blindsClosed from '../../img/blinds-closed.svg';
import blindsOpen from '../../img/blinds-open.svg';

const Blinds = ({ state }) => {
    const[blindsState, setBlindsState] = useState(state);

    const handleOpenBlinds = () => {
      setBlindsState('open');
    };

    const handleCloseBlinds = () => {
      setBlindsState('closed');
    };
    
    return (
        <div className="blinds">
          <img className="blinds__icon blinds__icon img" 
          src={blindsState === 'open' ? blindsOpen : blindsClosed} alt="Blinds" />
          <p className="blinds__name">Žaluzie</p>
          <div className="blinds__controls">
            <button className={`button ${blindsState === 'open' ? 'button--active' : ''}`} 
            onClick={handleOpenBlinds}>Otevřeno</button>
            <button className={`button ${blindsState === 'closed' ? 'button--active' : ''}`} 
            onClick={handleCloseBlinds}>Zavřeno</button>

          </div>
        </div>
    );
  };
  
export default Blinds;