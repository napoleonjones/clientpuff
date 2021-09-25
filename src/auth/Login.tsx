import React, { Component } from 'react';
import APIURL from '../helpers/environment';
import { Form, Input, Button } from 'antd';


type State = {
    username: string;
    password: string;
};

interface LoginProps {
    updateToken: (newToken: string) => void;
    updateUserRole: any;
    // setSessionToken: (newToken: string) => void;
}

export default class Login extends Component<LoginProps, State> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const reqBody = {
            email: this.state.username,
            password: this.state.password,
        }

        try {
            const res = await fetch(APIURL, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const json = await res.json();

            if (json.errors) {
                let errMsg = json.errors[0].message
                // this.setState({
                //     errorText: errMsg.charAt(0).toUpperCase() + errMsg.slice(1) + '.'
                // })
                // throw new Error(json.errors[0].message)
                console.log(errMsg)
            } else {
                console.log(json.Message);
                this.props.updateToken('');
                this.props.updateUserRole('');
            }
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <Form onFinish={this.handleSubmit}>
                <h3 style={{ textAlign: 'center' }}>Login</h3>
                <Form.Item label="Username">
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="Password">
                    <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        name="password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </Form.Item>
        
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        )
    };
};