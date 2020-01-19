import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies'

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false
        };
    }

    logout = () => {
        cookie.remove('token');
        this.setState({ navigate: true });
    };

    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/login" push={true} />;
        }

        return <h4 onClick={this.logout}>Log out</h4>;
    }
}

export default Logout;