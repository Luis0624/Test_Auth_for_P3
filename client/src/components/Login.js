import React,{useState} from "react"
import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image

 
function Login()  {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

     const handleSubmit = e => {
          e.preventDefault();
          console.log("username is " + username);
          console.log("password is " + password);
     };
      
     
  
  
  
  
      return (
        <div>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
                <input 
                    className="username" 
                    type="text" 
                    name="username" 
                    onChange={ e => setUsername(e.target.value)} 
                />
            </label>
            <label>
              Password:
                <input 
                    className="password"
                    type="password" 
                    name="password" 
                    onChange={e => setPassword(e.target.value)} 
                />
            </label>
            <button 
                  className="signInButton"
                  type="submit" 
                  value="Submit" 
            >
              Sign In
            </button>
          </form>
          <div className="linkToSignUp">
               Not a member?
               <a href="/signup"><strong className="linkToSignUp">Create an account</strong></a>
          </div>
        </div>
      );
    }
  
  
  // ReactDOM.render(
  //   <Login />,
  //   document.getElementById('root')
  // );
 
export default Login;