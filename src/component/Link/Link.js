import React from 'react';

const Link = ({input, submit})=>{
    return(
        <div>
            <p className='f3 black ttu tc'>face recognitor</p>
            <div className='f4 tc center width700'>
                <input className='w-70 mr2  lh-copy br3 pa1' type='text' placeholder='paste url in here' onChange={input}/>
                <button onClick={submit} className='myButton'>Detect</button>
            </div>
        </div>
    )
}

export default Link;