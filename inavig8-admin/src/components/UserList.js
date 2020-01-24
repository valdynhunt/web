import React from 'react';
import './UserList.css';

class UserList extends React.Component {

    onMouseHover = () => {
        this.props.handleHover(this.props.id);
    }

    render() {

        const { email } = this.props.subUser;
        
        return (
            <li
                className=""
                onMouseOver={this.onMouseHover}
            >              
                    { email } 
            </li>
        );
    };

}

export default UserList;