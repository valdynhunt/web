import React, { Component } from 'react';
import './Register.css';


import Auth from '@aws-amplify/auth';
import Amplify from '@aws-amplify/core';

// import aws_config from '../../config.json';
Amplify.configure({
    Auth: {

        // // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-west-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_x1nV7VStG4',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '7qismhftk1ehili7a4qp9cc5el',
    }
});

// You can get the current config object
// const currentConfig = Auth.configure();

class Register extends Component {//
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    // this.clearErrorState();
    // const error = Validate(event, this.state);
    // if (error) {
    //   this.setState({
    //     errors: { ...this.state.errors, ...error }
    //   });
    // }

    // AWS Cognito integration here
    // Password123!

    const { username, email, password } = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
          name: "first last"
        }
      });
      this.props.history.push("/confirm");
      console.log(signUpResponse);
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }

  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }//

  render() {
    return (

      <div className="container-login">

                <main className="main-login">

                    <section className="login-box1">
                        <h2>register with iNavig8</h2>
                        <img id="lg-login-icon" src="./img/icons/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        <form className=""  onSubmit={this.handleSubmit}>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/username-icon.png" alt="username-icon" />
                                <input 
                                  type="text"
                                  id="username"
                                  aria-describedby="userNameHelp"
                                  placeholder="username"
                                  value={this.state.username}
                                  onChange={this.onInputChange}
                                />
                            </div>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/username-icon.png" alt="username-icon" />
                                <input 
                                  type="email"
                                  id="email"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter email"
                                  value={this.state.email}
                                  onChange={this.onInputChange}
                                />
                            </div>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/password-icon.png" alt="password-icon" />
                                <input 
                                  type="password"
                                  id="password"
                                  placeholder="password"
                                  value={this.state.password}
                                  onChange={this.onInputChange}
                                />
                            </div>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/password-icon.png" alt="password-icon" />
                                <input 
                                  type="password"
                                  id="confirmpassword"
                                  placeholder="confirm password"
                                  value={this.state.confirmpassword}
                                  onChange={this.onInputChange}
                                />
                            </div>
                            <p><a href="/login">I know my login</a></p>
                            <input type="submit" className="button" value="register" />
                        </form>
                    </section>

                    <section className="title-box1">
                        <h3>indoor</h3>
                        <h3>navigation</h3>
                        <h3>system</h3>
                        <img src="./img/icons/location-icon.png" alt="Location Icon" title="Location Icon"/>               
                    </section>
                    
                </main>

            </div>




      // <section className="section auth">
      //   <div className="container">
      //     <h1>Register</h1>

      //     <form onSubmit={this.handleSubmit}>
      //       <div className="field">
      //         <p className="control">
      //           <input 
      //             className="input" 
      //             type="text"
      //             id="username"
      //             aria-describedby="userNameHelp"
      //             placeholder="Enter username"
      //             value={this.state.username}
      //             onChange={this.onInputChange}
      //           />
      //         </p>
      //       </div>
            // <div className="field">
            //   <p className="control has-icons-left has-icons-right">
            //     <input 
            //       className="input" 
            //       type="email"
            //       id="email"
            //       aria-describedby="emailHelp"
            //       placeholder="Enter email"
            //       value={this.state.email}
            //       onChange={this.onInputChange}
            //     />
            //     <span className="icon is-small is-left">
            //       <i className="fas fa-envelope"></i>
            //     </span>
            //   </p>
            // </div>
            // <div className="field">
            //   <p className="control has-icons-left">
            //     <input 
            //       className="input" 
            //       type="password"
            //       id="password"
            //       placeholder="Password"
            //       value={this.state.password}
            //       onChange={this.onInputChange}
            //     />
            //     <span className="icon is-small is-left">
            //       <i className="fas fa-lock"></i>
            //     </span>
            //   </p>
            // </div>
            // <div className="field">
            //   <p className="control has-icons-left">
            //     <input 
            //       className="input" 
            //       type="password"
            //       id="confirmpassword"
            //       placeholder="Confirm password"
            //       value={this.state.confirmpassword}
            //       onChange={this.onInputChange}
            //     />
            //     <span className="icon is-small is-left">
            //       <i className="fas fa-lock"></i>
            //     </span>
            //   </p>
            // </div>
      //       <div className="field">
      //         <p className="control">
      //           <a href="/forgotpassword">Forgot password?</a>
      //         </p>
      //       </div>
      //       <div className="field">
      //         <p className="control">
      //           <button className="button is-success">
      //             Register
      //           </button>
      //         </p>
      //       </div>
      //     </form>
      //   </div>
      // </section>
    );
  }
}

export default Register;