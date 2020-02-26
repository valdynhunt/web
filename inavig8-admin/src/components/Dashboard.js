import React from 'react'
import Location from './Location'
import './Dashboard.css'

class Dashboard extends React.Component {

    render() {

        const locations = JSON.parse(localStorage.getItem('locations'));

        return (

            <main className="dashboard-container">
                {Object.keys(locations).map(key => (
                    <Location
                        key={key}
                        id={key}
                        details={locations[key]} 
                    />
                ))}
            </main>

        )

    }

}

export default Dashboard;