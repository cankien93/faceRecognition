import React from 'react';

class ChangePassword extends React.Component {
    constructor(){
        super();
        this.state = {
            currentPassword: '',
            newPassword: '',
            reTypePassword: '',
            passCheck: true,
            passwordMatch: true
        }
    }

    onPasswordChange = (event) => {
        this.setState({currentPassword: event.target.value});
    }
    onNewPasswordChange = (event) => {
        this.setState({newPassword: event.target.value});
    }
    onReTypePassword = (event) =>{
        this.setState({reTypePassword: event.target.value});
    } 
    

    onSubmitChangePassword = () => {
        const {newPassword, reTypePassword, currentPassword}= this.state;
           
        if(newPassword === reTypePassword) {
            fetch('https://secret-eyrie-25986.herokuapp.com/changePassword', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                    email: this.props.email
                })
                })
                .then(response => response.json())
                .then(id =>{
                    console.log(id);
                    if(id==='password updated'){
                        this.props.onRouteChange('home');
                    }
            });
        } else {
            this.setState({passwordMatch: false})
        }
    }

    render(){
        return(
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="change-password" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Change Password</legend>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Current Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="cur-password" 
                                autoComplete="current-password"
                                onChange={this.onPasswordChange}
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">New Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="new-password" 
                                autoComplete="current-password"
                                onChange={this.onNewPasswordChange}
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Re-type New Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="retype-new-password" 
                                autoComplete="current-password"
                                onChange={this.onReTypePassword}
                                />
                        </div>
                        {this.state.passwordMatch===false
                            ?<p>password did not match</p>
                            :null
                        }
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={this.onSubmitChangePassword} 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Change Password"/>
                        </div>
                    </div>
                </main>
            </article>
                );
    }
}


export default ChangePassword;