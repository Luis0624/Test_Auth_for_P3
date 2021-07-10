import React from "react";
import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image

 
export class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        username: '',
        password: '',
        dob: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      // console.log("A user was submitted: " + "\n" + "Email: " + this.state.email + "\n" + "Username: " + this.state.username + "\n" + "Password: " + this.state.password + "\n" + "DOB: " + this.state.dob);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <h1>SIGNUP</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input name="email" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Username:
              <input name="username" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input name="password" type="password" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              DOB:
              <input name="dob" type="date" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
  
  // ReactDOM.render(
  //   <Signup />,
  //   document.getElementById('root')
  // );
 
export default Signup;