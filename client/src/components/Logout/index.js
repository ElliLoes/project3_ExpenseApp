import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withCookies } from 'react-cookie';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false
        };
        const { cookies } = props;
        this.cookies = cookies
    }

    logout = () => {
        this.cookies.remove("token");
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

export default withCookies(Logout);