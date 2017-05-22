import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
    state = { email: '', password: '' };

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLogin() {
        
        this.props.loginUser(this.props);
    }

    renderButton() {
        if(this.props.loading) return <Spinner size={'large'} />

        return (
            <Button onPress={this.onLogin.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input  label={'Email'}
                            value={this.props.email}
                            placeholder={'email@gmail.com'}
                            onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input  label={'Password'}
                            secureTextEntry
                            placeholder={'password'}
                            value={this.props.password}
                            onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { 
        email, 
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, actions)(LoginForm);