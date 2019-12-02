import React from 'react';
import './NotLoggedIn.css';

class ResetPassword extends React.Component {

    render() {

        return (

            <div className="container-notLoggedIn">

                <main className="main-notLoggedIn">

                    <section className="title-box-right2">
                        <h3>indoor</h3>
                        <h3>navigation</h3>
                        <h3>system</h3>
                        <img src="./img/location-icon.png" alt="Location Icon" title="Location Icon"/>               
                    </section>

                    <section className="input-box-area2">
                        <h2>reset password</h2>
                        <img id="lg-login-icon" src="./img/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        <div className="login-area on-right">
                            <img className="login-icons" src="./img/password-icon.png" alt="password-icon" />
                            <input type="password" id="password" placeholder="password" />
                        </div>
                        <div className="login-area on-right">
                            <img className="login-icons" src="./img/password-icon.png" alt="password-icon" />
                            <input type="password" id="confirm-password" placeholder="confirm password" />
                        </div>
                        <input type="button" className="button" value="reset" />
                    </section>

                </main>

            </div>

        )

    }

}

export default ResetPassword;