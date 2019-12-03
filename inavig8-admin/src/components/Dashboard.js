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
                {/* <section className="location-list">
                    <h4>Location: Lorem Ipsum 2</h4>
                    <img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
                </section>
                <section className="location-list">
                    <h4>Location: Lorem Ipsum 3</h4>
                    <img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
                </section>
                <section className="location-list">
                    <h4>Location: Lorem Ipsum 4</h4>
                    <img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
                </section>
                <section className="location-list">
                    <h4>Location: Lorem Ipsum 5</h4>
                    <img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
                </section>
                <section className="location-list">
                    <h4>Location: Lorem Ipsum 6</h4>
                    <img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
                </section> */}
            </main>

        )

    }

}

export default Dashboard;