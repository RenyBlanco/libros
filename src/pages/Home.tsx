import React from 'react';
import DragonsPic from '../assets/dragons.jpg';

const home = () => {
    return (
        <div>
            <span className='imgContainer'>
            <img className="imgCentral" src={DragonsPic} alt="dragones" />
            </span>
        </div>
    );
};
 
export default home;