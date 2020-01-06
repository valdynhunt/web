import React from 'react';
import './UserList.css';

class UserList extends React.Component {

    onMouseHover = () => {
        this.props.handleHover(this.props.id);
    }

    render() {

        //const user = this.props.details;
        
        return (
            <li
                className=""
                onMouseOver={this.onMouseHover}
            >              
                    test{/* {user.first_name + " " + last_name}  */}
            </li>
        );
    };

}

export default UserList;