import React from 'react';
import Logo from './Logo';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Login from './auth/Login';
import './App.css';
import config from '../config.json';

import Auth from '@aws-amplify/auth';


class App extends React.Component {

  state = {
    admin: JSON.parse(localStorage.getItem('admin')) || [],
    nav: 'Dashboard',
    locations: {},
  }

  componentDidMount() {

    // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
    //     JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

    let headers = config.api.headers;
    
    fetch(config.api.invokeUrl + '/locations', {
        method: "GET",
        headers,
    }).then(response => {
        return response.json();
    }).then(result => {
        this.setState(
            {
                locations: result.body.data
            }
        );
    });

}

  onLogin = (user) => {

    this.setState(
      {
        admin: {
          username: user.username,
          password: user.password,
          email: user.attributes.email,
          first_name: user.attributes.name.split(" ").length === 2 ? user.attributes.name.split(" ")[0] : "",
          last_name: user.attributes.name.split(" ").length === 2 ? user.attributes.name.split(" ")[1] : "",
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

  handleCreate = (newLocation, parent_location_id) => {
    
      console.log("handleCreate: ", newLocation);
      
      var child_location_id;
      let headers = config.api.headers;
      const url1 = config.api.invokeUrl + '/location/new';

      fetch(url1, {
          method: "POST",
          headers,
          body: newLocation,
      }).then(response => {
          console.log("App.js -> response: ", response);
          return response.json();
      // }).then(result => {
      //     console.log("App.js -> result: ", result);
      //     const locations = {...this.state.locations};
      //     this.setState(
      //         {
      //             locations: [...this.state.locations, { ...result.body.data[0] }]
      //         }
      //     );
      //     child_location_id = {...result.body.data[0].location_id};
      });

      if (child_location_id) {
          const url2 = config.api.invokeUrl + '/location/set-child?parent_id=' + parent_location_id + '&child_id=' + child_location_id;
          console.log("url2: ", url2);

          //
          fetch(url2, {
              method: "GET",
              headers,
          }).then(response => {
              return response.json();
          });

          fetch(config.api.invokeUrl + '/locations', {
            method: "GET",
            headers,
          }).then(response => {
              return response.json();
          }).then(result => {
              this.setState(
                  {
                      locations: result.body.data
                  }
              );
          });
        }

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
      // this.setState(s);//

  

    })
    .catch(err => console.log(err));

    //console.log("this.state.admin.length: ", this.state.admin.length);
    if (!this.state.admin || this.state.admin.length === 0) {
      return <Login onLogin={this.onLogin} />;
    } else {
      return (

        <div className="container-loggIn">
          <Logo />
          <Header profile={this.state.admin} />
          <Nav onNavSelection={this.onNavSelection} highlight={this.state.nav} />
          <Main page={this.state.nav} locations={this.state.locations} handleCreate={this.handleCreate} />
          <Footer />
        </div>

      )
    }

    

}

}

export default App;
