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
    admin: {},
  }

  userLogin = (user) => {
    const admin = {
      ...this.state.admin
    };

    admin[`user(Date.now())`] = user;

    this.setState(
      {
        admin
      }
    )
  }

  

  render() {

    if (!this.state.username) {
      return <Login userLogin={this.props.userLogin} />;
    }

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
