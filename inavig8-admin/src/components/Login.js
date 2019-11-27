import React from 'react';
import './Login.css';

class Login extends React.Component {

    usernameRef = React.createRef();
    passwordRef = React.createRef();

    handleSubmit = (e) => {

        e.preventDefault();

        console.log('USERNAME: ' + this.usernameRef.current.value);
        console.log('PASSWORD: ' + this.passwordRef.current.value);

        const user = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value,
        }

        //this.props.userLogin(user);

        e.currentTarget.reset();
    }

    render() {

        return (

            <div className="container-login">

                <main className="main-login">

                    <section className="login-box1">
                        <h2>sign in to iNavig8</h2>
                        <img id="lg-login-icon" src="./img/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="login-area">
                                <img className="login-icons" src="./img/username-icon.png" alt="username-icon" />
                                <input type="text" id="username" name="username" placeholder="username" ref={this.usernameRef} />
                            </div>
                            <div className="login-area">
                                <img className="login-icons" src="./img/password-icon.png" alt="password-icon" />
                                <input type="password" id="password" name="password" placeholder="password" ref={this.passwordRef} />
                            </div>
                            <p>forgot password?</p>
                            <input type="submit" className="button" value="sign in" />
                        </form>
                    </section>

                    <section className="title-box1">
                        <h3>indoor</h3>
                        <h3>navigation</h3>
                        <h3>system</h3>
                        <img src="./img/location-icon.png" alt="Location Icon" title="Location Icon"/>               
                    </section>
                    
                </main>

            </div>

        )

    }

}

export default Login;