import React from 'react'
import Logo from './Logo'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import Login from './auth/Login'
import './App.css'
import config from '../config.json'

import Auth from '@aws-amplify/auth'


class App extends React.Component {

    state = {
        admin: JSON.parse(localStorage.getItem('admin')) || [],
        nav: 'Dashboard',
        uploadImage: {},
    }

    componentDidMount() {

        // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
        //     JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";
        const user = localStorage.getItem('CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el.LastAuthUser');
        config.api.headers.Authorization = localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + user + ".idToken");

    }

    componentWillUnmount() {
        localStorage.clear();
    }

    

    getSubUsersArray(user_id) {
        return Promise.resolve([this.getSubUsers(user_id)]);
    }

    getSubUsers = (user_id) => {
        const headers = config.api.headers;
        var users = null;

        fetch(config.api.invokeUrl + '/user/sub/' + user_id, {
            method: "GET",
            headers,
        }).then(response => {
            return response.json();
        }).then(result => {
            var temp = result.body.data;
            temp.forEach(user => {
                delete user.password;
                delete user.salt;
            });
            users = temp.filter(user => user.user_id !== this.state.admin.user_id);

            localStorage.setItem('subUsers', JSON.stringify(users));
            
        });

        return JSON.parse(localStorage.getItem('subUsers'));
    }

    sanitizeLocations = (locations) => {

        locations.forEach(location => {
            delete location.modified_on;
            delete location.created_on;
            delete location.modified_by;
            delete location.created_by;
        });

        localStorage.setItem('locations', JSON.stringify( locations ));

    }

    sanitizeAdmin = (user) => {

        var admin = {
            username: user.username,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            user_id: user.user_id,
            role: ((user.role_id === 1) ? "Admin" : "User")
        };

        localStorage.setItem('admin', JSON.stringify( admin ));

    }

    onLogin = (user) => {

        let headers = config.api.headers;

        fetch(config.api.invokeUrl + '/users', {
            method: "GET",
            headers,
        }).then(response => {
            return response.json();
        }).then(result => {

            const users = result.body.data;
            console.log(users);
            const admin = (users.filter(usr => usr.username === user.username))[0];

            this.sanitizeAdmin(admin);
            this.sanitizeLocations(admin.locations);

            this.getSubUsersArray(admin.user_id).then( () => {
                console.log("localStorage updated");
            });
    
            window.location.reload(true);
        });

    }

    onNavSelection = (nav) => {
        this.setState (
            {
                nav
            }
        );
    }

    handleCreateLocation = (newLocation, parent_location_id) => {
        
        // console.log("handleCreateLocation: ", newLocation);
        
        //var child_location_id;
        const url = config.api.invokeUrl + '/location/new';
        let headers = config.api.headers;
        let body = JSON.stringify(newLocation);

        fetch(url, {
            method: "POST",
            headers,
            body,
        }).then(response => {
            return response.json();
        }).then(result => {
            // console.log("App.js -> result: ", result);
            let locations = JSON.parse(localStorage.getItem('locations'));
            locations.push(result.body.data[0]);
            localStorage.setItem('locations', JSON.stringify(locations));
            
            // this.setState(
            //     {
            //         locations: [...this.state.locations, { ...result.body.data[0] }]
            //     }
            // );
            //child_location_id = {...result.body.data[0].location_id};

        });

        // if (child_location_id) {
        //     const url2 = config.api.invokeUrl + '/location/set-child?parent_id=' + parent_location_id + '&child_id=' + child_location_id;

        //     fetch(url2, {
        //         method: "GET",
        //         headers,
        //     }).then(response => {
        //         return response.json();
        //     });

        //     fetch(config.api.invokeUrl + '/locations', {
        //       method: "GET",
        //       headers,
        //     }).then(response => {
        //         return response.json();
        //     });
        // }

    }

    handleUpdateLocation = (currentLocation) => {

        const headers = config.api.headers;
        const body = JSON.stringify(currentLocation);
        const url = config.api.invokeUrl + '/location/update';

        fetch(url, {

            method: "POST",
            headers,
            body,

        }).then(response => {

//TODO: it is updating the database, but not getting response because of CORS error
/*
  Access to fetch at 'https://6ifyh4p4z2.execute-api.us-west-2.amazonaws.com/dev/location/update' from
  origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header 
  is present on the requested resource. If an opaque response serves your needs, set the request's mode 
  to 'no-cors' to fetch the resource with CORS disabled.

  index.js:1375 TypeError: Failed to fetch
*/

            if (response.ok) {
                return response.json();
            } else {
                throw Error(`Request rejected with status ${response.status}`);
            }

        }).catch(console.error);
        // }).then(result => {

            const locations = JSON.parse(localStorage.getItem('locations'));
            locations.forEach(loc => {
                console.log("loc: ", loc);
                if (loc.location_id === currentLocation.location_id) {
                    console.log("match!");
                    loc.short_name = currentLocation.short_name;
                    loc.long_name = currentLocation.long_name;
                    loc.description = currentLocation.description;
                    // loc.canvas_image = currentLocation.canvas_image;
                }
            });

            localStorage.setItem('locations', JSON.stringify(locations));
            return locations; 

    }

    handleDeleteLocation = (location_id) => {

        // console.log("App.js's handleDeleteLocation: deleting location ", location_id);
        let headers = config.api.headers;
        const url = config.api.invokeUrl + '/location/delete/' + location_id;

        fetch(url, {
            method: "GET",
            headers,
        }).then(response => {
            return response.json();
        }).then(result => {

            const locations = ((JSON.parse).localStorage.getItem('locations')).filter(loc => loc.location_id !== location_id);
            localStorage.setItem('locations', JSON.stringify(locations));

        });
    }

    handleImportImage = (body) => {

        console.log("App.js's handleImportImage (uploadImage): ", body);
        const headers = config.api.headers;

        fetch(config.api.invokeUrl + '/location/image', {
            method: "POST",
            headers,
            body,
        }).then(response => {
            return response.json();
        }).then(result => {
            console.log("upload succesful! result: ", result);
        });

    }

    render() {
        
        Auth.currentSession()
        .then(data => {
        // this.setState(data);
        // console.log(data);
        // var s = {
        //     admin: {
        //         username: data.accessToken.payload.username,
        //         password: "",
        //         email: data.idToken.payload.email,
        //         first_name: "firstname",
        //         last_name: "lastname",
        //         role: "Admin"
        //     }
        // };
        // this.setState(s);//

        })
        .catch(err => console.log(err));

        if (!this.state.admin || this.state.admin.length === 0) {
            return <Login onLogin={this.onLogin} />;
        } else {
            return (

                <div className="container-loggIn">
                    <Logo />
                    <Header/>
                    <Nav 
                        onNavSelection={this.onNavSelection} 
                        highlight={this.state.nav} 
                    />
                    <Main 
                        page={this.state.nav} 
                        handleCreateLocation={this.handleCreateLocation}
                        handleUpdateLocation={this.handleUpdateLocation}
                        handleDeleteLocation={this.handleDeleteLocation}
                        handleImportImage={this.handleImportImage}
                    />
                    <Footer />
                </div>

            )
        }

        

    }

}

export default App;