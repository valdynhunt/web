import React from 'react';
import './NotLoggedIn.css';

class ForgotPassword extends React.Component {

    render() {

        return (

            <div className="container-notLoggedIn">

                <main className="main-notLoggedIn">

                    <section className="title-box-right2">
                        <h3>indoor</h3>
                        <h3>navigation</h3>
                        <h3>system</h3>
                        <img src="./img/icons/location-icon.png" alt="Location Icon" title="Location Icon"/>               
                    </section>

                    <section className="input-box-area2">
                        <h2>forgot password</h2>
                        <img id="lg-login-icon" src="./img/icons/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        <div className="login-area">
                            <img className="login-icons" src="./img/icons/username-icon.png" alt="username-icon" />
                            <input type="email" id="email" placeholder="email" />
                        </div>
                        <input type="button" className="button" value="send" />
                        <p className="link-signin"><a href="/">I remember my password!</a></p>
                    </section>

                </main>

            </div>

        )

    }

}

export default ForgotPassword;