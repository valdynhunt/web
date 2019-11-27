import React from 'react';
import Logo from './Logo';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import Login from './Login';

class App extends React.Component {

  state = {
    admin: null,
  }

  onLogin = (user) => {

    console.log('username: ' + user.username);

    // will need to authenticate with Cognito before setting state
    this.setState(
      {
        admin: {
          username: user.username,
          password: user.password,
          email: 'jcampbell18@eagles.ewu.edu',
          first_name: 'Jason',
          last_name: 'Campbell',
          role: 'Admin',
        },
      }
    );

  }

  render() {

    if (!this.state.admin) {
      return <Login onLogin={this.onLogin} />;
    }

    return (

      <div className="container-loggIn">
        <Logo />
        <Header profile={this.state.admin} />
        <Nav />
        <Main />
        <Footer />
      </div>

    )

}

}

export default App;
