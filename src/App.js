import React, {Component} from 'react';
import Nav from './component/Navigation/Nav';
import Logo from './component/Logo/Logo';
import Rank from './component/Rank';
import Link from './component/Link/Link';
import FaceImage from './component/FaceImage/FaceImage';
import SignIn from './component/Signin/signin';
import Register from './component/Register/Register';
import ChangePassword from './component/changePassword';


const initialState = {
  input: '',
  inputUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '102',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor(){
    super()
    this.state = initialState;
  }

  loadUser = (data) =>{
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onChangeInput = (event) => {
    this.setState({input: event.target.value})
  }

  faceCaculator = (response)=>{
    const data = response.outputs[0].data.regions[0].region_info.bounding_box;
    const domImg = document.getElementById('faceDetector');
    const width = domImg.width;
    const height = domImg.height;
    this.setState({box: {
      left: data.left_col*width,
      top: data.top_row*height,
      right: width - data.right_col*width,
      bottom: height - data.bottom_row*height
    }}) 
    console.log(this.state.box)
  }
  
  onSubmit = () =>{
    this.setState({inputUrl: this.state.input});
      // Predict the contents of an image by passing in a URL.
    fetch('https://secret-eyrie-25986.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        url: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch('https://secret-eyrie-25986.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(res=>res.json())
        .then(count=> {
          this.setState(Object.assign(this.state.user, {entries: count}))
        });
        this.faceCaculator(response);
      }
    })
  }

  onRouteChange = (newRoute) =>{
    if(newRoute ==='signin'){
      this.setState(initialState)
    }else if(newRoute === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: newRoute});
  }

  render(){
    return (
      <div className="App">

        <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        { this.state.route === 'home'
          ?<div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <Link input={this.onChangeInput} submpsit={this.onSubmit}/>
            <FaceImage url={this.state.inputUrl} box={this.state.box}/>
          </div>
          :this.state.route === 'signin'
            ?<SignIn loadUser= {this.loadUser} onRouteChange={this.onRouteChange}/>
            :this.state.route === 'changePassword'
              ?<ChangePassword email={this.state.user.email} onRouteChange ={this.onRouteChange}/>
              :<Register loadUser={this.loadUser} onRouteChange ={this.onRouteChange}/>
        }
      </div>
    );
  }
}

export default App;
