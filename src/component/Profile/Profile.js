import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: this.props.user.name,
            age: this.props.user.name,
            pet: this.props.user.name 
        }
    }
    onFormChange=(event)=>{
        switch(event.target.name){
            case 'user-name':
                this.setState({name: event.target.value});
                break;
            case 'user-age':
                this.setState({age: event.target.value});
                break;
            case 'user-pet':
                this.setState({pet: event.target.value});
                break;
            default:
                return;
        }
    }
    onProfileUpdate=(data)=>{
        fetch(`https://secret-eyrie-25986.herokuapp.com/profile/${this.props.user.id}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({formInput: data})
        }).then(response => {
            this.props.toggleModal();
            this.props.loadUser({...this.props.user, ...data})
        }).catch(console.log)
        
    }
    render(){
        const {user}  = this.props;
        const {name, age, pet} = this.state;
        return (
            <div className='profile-modal'>
                <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black-80 w-100">
                        <img
                            src="http://tachyons.io/img/logo.jpg"
                            className="h3 w3 dib" alt="avatar"
                        />
                        <h1>{this.state.name}</h1>
                        <p>{`id: ${user.id}`}</p>
                        <h4>{`Images Submitted: ${user.entries}`}</h4>
                        <p>{`Member since: ${user.joined}`}</p>
                        <hr/>
                        <label className='mt2 fw6 w-100' htmlFor='user-name'>Name:</label>
                        <input 
                            className="pa2 ba w-100"
                            type="text" 
                            name="user-name"  
                            id="name" 
                            autoComplete="username"
                            placeholder={name}
                            onChange={this.onFormChange}
                            required
                            />
                        <label className='mt2 fw6 w-100' htmlFor='user-age'>Age:</label>
                        <input 
                            className="pa2 ba w-100"
                            type="text" 
                            name="user-age"  
                            id="age" 
                            autoComplete="useremail"
                            placeholder='56'
                            onChange={this.onFormChange}
                            required
                            />
                        <label className='mt2 fw6 w-100' htmlFor='user-name'>Pet:</label>
                        <input 
                            className="pa2 ba w-100"
                            type="text" 
                            name="user-pet"  
                            id="pet" 
                            autoComplete="pet"
                            placeholder='dragon'
                            onChange={this.onFormChange}
                            required
                            />
                        <div className="mt4" style={{display:'flex', justifyContent: 'space-evenly'}}>
                            <button 
                                className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                                onClick={()=>this.onProfileUpdate({name, age, pet})}
                            >
                                Save
                            </button>
                            <button 
                                className='b pa2 grow pointer hover-white w-50 bg-light-red b--black-20'
                                onClick={this.props.toggleModal}
                            >
                                Cancel
                            </button>
                        </div>
    
                    </main>
                    <div className='modal-close' onClick={this.props.toggleModal}>&times;</div>
                </article>
            </div>
        )
    }

}

export default Profile;