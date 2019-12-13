import React from 'react';
import './Dashboard.css';
import Location from './Location';

class Dashboard extends React.Component {

    render() {

        return (

            <main className="dashboard-container">
                {Object.keys(this.props.locations).map(key => (
                    <Location
                        key={key}
                        id={key}
                        details={this.props.locations[key]} 
                    />
                ))}
            </main>

        )

    }

}

export default Dashboard;