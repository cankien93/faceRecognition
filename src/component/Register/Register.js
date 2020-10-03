import React from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            signInEmail: '',
            signInPassword: '',
            register: {
                nameBlank: '',
                email: '',
                password: ''
            }
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
        this.setState(Object.assign(this.state.register, {nameBlank: 'not'}));
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
        this.setState(Object.assign(this.state.register, {email: 'not'}));
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
        this.setState(Object.assign(this.state.register, {password: 'not'}));
    }

    onSubmitRegister = () => {
        const {name, signInEmail, signInPassword}= this.state;
        if(!name){
            this.setState(Object.assign(this.state.register, {nameBlank: 'blank'}));
        }
        if(!signInEmail){
            this.setState(Object.assign(this.state.register, {email: 'blank'}));
        }
        if(!signInPassword){
            this.setState(Object.assign(this.state.register, {password: 'blank'}));
        }
        
        if(name && signInEmail && signInPassword) {
            fetch('https://secret-eyrie-25986.herokuapp.com/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: signInEmail,
                    password: signInPassword
                })
                })
                .then(response => response.json())
                .then(user =>{
                    if(user.id){
                        this.props.loadUser(user);
                        this.props.onRouteChange('home');
                    }
            });
        }
    }



    render(){
        const {nameBlank, email, password} = this.state.register;
        
        const registerButton = <input 
            onClick={this.onSubmitRegister} 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value='Register'
            />

        return(
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <InputName onNameChange={this.onNameChange} blank={nameBlank} />
                        <InputEmail onEmailChange={this.onEmailChange} blank={email} />
                        <InputPassword onPasswordChange={this.onPasswordChange} blank={password} />
                        </fieldset>
                        <div className="">
                            {registerButton}
                            {nameBlank === 'blank' || email==='blank' || password==='blank'
                                ?<p>You can not leave input blank</p>
                                :null
                            }
                        </div>
                    </div>
                </main>
            </article>
        );
    }
    
}

export default Register;