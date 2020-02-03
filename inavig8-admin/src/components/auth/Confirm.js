import React, { Component } from 'react';
import './Confirm.css';

class Confirm extends Component {
  
  render() {
    return (

      <div className="container-login">

                <main className="main-login">

                    <section className="login-box1">
                        <h2>register with iNavig8</h2>
                        <img id="lg-login-icon" src="./img/icons/Login-Icon.png" alt="Login Icon" title="Login Icon"/>
                        Check your email. <br />
                        <a href = "/">login</a>
                    </section>

                    <section className="title-box1">
                        <h3>indoor</h3>
                        <h3>navigation</h3>
                        <h3>system</h3>
                        <img src="./img/icons/location-icon.png" alt="Location Icon" title="Location Icon"/>               
                    </section>
                    
                </main>

      </div>
    );
  }
}

export default Confirm;