import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';

const Logo = ()=>{
    return(
        <Tilt className="Tilt br3 shadow-2 ml3" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner">
                <img alt='face' src={face}></img>
            </div>
        </Tilt>
    )
}

export default Logo;