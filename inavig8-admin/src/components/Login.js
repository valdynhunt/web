import React from 'react';
import './Login.css';

import Auth from '@aws-amplify/auth';
import Amplify from '@aws-amplify/core';

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-west-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_x1nV7VStG4',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '7qismhftk1ehili7a4qp9cc5el',

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',
    }
});

class Login extends React.Component {

    usernameRef = React.createRef();
    passwordRef = React.createRef();

    onSubmit = (e) => {

        e.preventDefault();

        const user = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value,
        };
        var username = user.username;
        var password = user.password;
        var validationData = {};

        // For advanced usage
        // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
        Auth.signIn({
            username, // Required, the username
            password, // Optional, the password
            validationData // Optional, a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication
        }).then(user => {
            console.log("user:... ", user);
            return this.props.onLogin(user);
        })
        .catch(err => console.log(err));

        // this.props.onLogin(user);

        // reset form
        e.currentTarget.reset();
    }

    render() {

        return (

            <div className="container-login">

                <main className="main-login">

                    <section className="login-box1">
                        <h2>sign in to iNavig8</h2>
                        <img id="lg-login-icon" src="./img/icons/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        <form className="" onSubmit={this.onSubmit}>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/username-icon.png" alt="username-icon" />
                                <input type="text" id="username" name="username" placeholder="username" ref={this.usernameRef} />
                            </div>
                            <div className="login-area">
                                <img className="login-icons" src="./img/icons/password-icon.png" alt="password-icon" />
                                <input type="password" id="password" name="password" placeholder="password" ref={this.passwordRef} />
                            </div>
                            <p><a href="/forgot">forgot password?</a></p>
                            <input type="submit" className="button" value="sign in" />
                            <a href = "/register" >register</a>
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

        )

    }

}

export default Login;