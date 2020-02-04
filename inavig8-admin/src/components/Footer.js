import React from 'react';
import './Footer.css';

class Footer extends React.Component {

	logout() {
		
	localStorage.clear();
	 window.location.reload();

	}

    render() {

        return (

            <footer onClick = {this.logout}>
                <img src="./img/icons/logout-icon.png" alt="Logout" title="Logout" />
                <h6>Logout</h6>
            </footer>

        );

    }

}

export default Footer;