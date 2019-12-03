import React from 'react';
import './Dashboard.css';
import Location from './Location';

class Dashboard extends React.Component {

    state = {
        locations: {},
    }

    componentDidMount() {

        let headers = {
            'Content-Type': 'application/json',
            'x-api-key': 'Il5Hx547OB3VWglNlnYM35XJL4sv1ok57bJakZav',
        };

        //fetch('https://7g8edlnlmd.execute-api.us-east-2.amazonaws.com/dev/locations')   // naji
        fetch('https://t1o352i3j3.execute-api.us-west-2.amazonaws.com/dev/locations', 
        {
            method: "GET",
            headers,
        }) // david
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result);
                this.setState(
                    {
                        locations: result.body.data
                    }
                );
            });

    }

    render() {

        return (

            <main className="dashboard-container">
                {Object.keys(this.state.locations).map(key => (
                    <Location
                        key={key}
                        id={key}
                        details={this.state.locations[key]} 
                    />
                ))}
            </main>

        )

    }

}

export default Dashboard;