import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Nav = ({onRouteChange, isSignedIn, toggleModal})=>{
    
    if (isSignedIn){
        return(
            <div className='flex justify-end mr2'>
                <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
                {/* <p onClick={()=>onRouteChange('changePassword')} className='f3 pa2 link dim pointer black dropbtn'>Change Password</p>
                <p onClick={()=>onRouteChange('signin')} className='f3 pa2 link dim pointer black dropbtn'>Sign Out</p> */}
            </div>
        )
    } else {
        return(
            <div className='flex justify-end'>
                <p onClick={()=>onRouteChange('signin')} className='f3 pa2 link dim pointer black'>Sign In</p>
                <p onClick={()=>onRouteChange('register')} className='f3 pa2 link dim pointer black'>Register</p>
            </div>
        )

    }
}

export default Nav;