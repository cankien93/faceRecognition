import React from 'react';


const InputName = ({onNameChange, blank})=>{
    return(
        <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
            {blank==='blank'
                ?<input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90 b--red "
                    type="name" 
                    name="name"  
                    id="name" 
                    autoComplete="username"
                    onChange={onNameChange}
                    required
                    />
                :<input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90 "
                    type="name" 
                    name="name"  
                    id="name" 
                    autoComplete="username"
                    onChange={onNameChange}
                    required
                    />
            }
        </div>
    )
}

export default InputName;