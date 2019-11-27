import React from 'react';
import './Profile.css';

class Profile extends React.Component {

    render() {

        return (

            <div className="profile-modal">
                <a className="profile-modal-close" onClick={close}>&times;</a>
                <h3>Profile</h3>
                <div className="layout-profile">
                    <section className="profile-col-left">
                        <label className="profile-bold" htmlFor="first_name">First Name:&nbsp;
                            <input type="text" name="first_name" id="first_name" value="Jason" readOnly="readonly" />
                        </label>
                        <label className="profile-bold" htmlFor="last_name">Last Name:&nbsp;
                            <input type="text" name="last_name" id="last_name" value="Campbell" readOnly="readonly" />
                        </label>
                        <label className="profile-bold" htmlFor="email">Email:&nbsp;
                            <input type="email" name="email" id="email" value="jcampbell18@eagles.ewu.edu" readOnly="readonly" />
                        </label>
                    </section>
                    <section className="profile-col-right">
                        <label className="profile-bold" htmlFor="username">Username:&nbsp;
                            <input type="text" name="username" id="username" value="jcampbell18" readOnly="readonly" />
                        </label>
                        <label className="profile-bold" htmlFor="password">Password:&nbsp;
                         <input type="password" name="password" id="password" value="password" readOnly="readonly" />
                        </label>
                        <label className="profile-bold" htmlFor="role">Role:&nbsp;
                         <input type="text" name="role" id="role" value="Admin" readOnly="readonly" />
                        </label>
                    </section>
                </div>
                <div className="profile-buttons">
                    <button
                        className="profile-button"
                        onClick={this.props.close}
                    >
                            close
                    </button>
                    <button
                        className="profile-button"
                    >
                            save
                    </button>
                </div>
            </div>

        )

    }

}

export default Profile;