import React from 'react';
import Logo from './Logo';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import Login from './Login';

import Auth from '@aws-amplify/auth';


class App extends React.Component {

  // state = {
  //   admin: null
  // }
  state = {
    admin: JSON.parse(localStorage.getItem('admin')) || [],
    nav: 'dashboard',
  }

  onLogin = (user) => {

    // will need to authenticate with Cognito before setting state
    this.setState(
      {
        admin: {
          username: user.username,
          password: user.password,
          email: user.attributes.email,
          first_name: user.attributes.name.split(" ").length == 2 ? user.attributes.name.split(" ")[0] : "",
          last_name: user.attributes.name.split(" ").length == 2 ? user.attributes.name.split(" ")[1] : "",
          role: 'Admin',
        },
      }
      ,() => {
      localStorage.setItem('admin', JSON.stringify(this.state.admin))
    });

  }

  onNavSelection = (nav) => {

    this.setState (
      {
        nav
      }
    );

  }

  render() {

    Auth.currentSession()
    .then(data => {
      // this.setState(data);
      console.log(data);
      var s = {
        admin: {
          username: data.accessToken.payload.username,
          password: "",
          email: data.idToken.payload.email,
          first_name: "firstname",
          last_name: "lastname",
          role: "Admin"
        }
      };
      // this.setState(s);

  

    })
    .catch(err => console.log(err));

    console.log("this.state.admin.length: ", this.state.admin.length);
    if (!this.state.admin || this.state.admin.length == 0) {
      return <Login onLogin={this.onLogin} />;
    } else {
      return (

        <div className="container-loggIn">
          <Logo />
          <Header profile={this.state.admin} />
          <Nav onNavSelection={this.onNavSelection} highlight={this.state.nav} />
          <Main page={this.state.nav} />
          <Footer />
        </div>

      )
    }

    

}

}

export default App;
