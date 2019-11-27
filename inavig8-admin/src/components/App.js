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

    // will need to authenticate with Cognito before setting state
    this.setState(
      {
        admin: user
      }
    );

  }

  render() {

    if (!this.state.admin) {
      return <Login onLogin={this.onLogin} />;
    }
console.log(this.state.admin);
    return (

      <div className="container-loggIn">
        <Logo />
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>

    )

}

}

export default App;
