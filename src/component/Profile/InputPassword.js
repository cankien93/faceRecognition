import React from 'react';

const InputPassword = ({onPasswordChange, blank})=>{
    return(
        <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            {blank==='blank'
                ?<input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--red" 
                    type="password" 
                    name="password"  
                    id="password" 
                    autoComplete="new-password"
                    onChange={onPasswordChange}
                />
                :<input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" 
                    autoComplete="new-password"
                    onChange={onPasswordChange}
                />
            }
        </div>
)
}

export default InputPassword;