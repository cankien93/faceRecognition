import React from 'react';

const InputEmail = ({onEmailChange, blank})=>{
    return(
        <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            {blank==='blank'
                ?<input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--red" 
                type="email" 
                name="email-address"  
                id="email-address"
                autoComplete="username"
                onChange={onEmailChange}
                />
                :<input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                autoComplete="username"
                onChange={onEmailChange}
                required
                />
            }
        </div>
    )
}

export default InputEmail;