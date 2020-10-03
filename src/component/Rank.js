import React from 'react';

const Rank = ({name, entries})=>{
    return(
        <div className='f2 black tc '>
            <p className='ma2'>{`${name}'s got ${entries} times`}</p>
        </div>
    )
}

export default Rank;