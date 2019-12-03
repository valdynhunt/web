import React from 'react';
import './Footer.css';

class Footer extends React.Component {

	logout() {
		
	localStorage.removeItem('admin');
	 window.location.reload();

	}

    render() {

        return (

            <footer>
                <img onClick = {this.logout} src="./img/icons/logout-icon.png" alt="Logout" title="Logout" />
                <h6>Logout</h6>
            </footer>

        );

    }

}

export default Footer;