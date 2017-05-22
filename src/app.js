import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDKCYc1CP9SJoqWwPcno9dXVEH56LU8w9s",
            authDomain: "manager-7701c.firebaseapp.com",
            databaseURL: "https://manager-7701c.firebaseio.com",
            projectId: "manager-7701c",
            storageBucket: "manager-7701c.appspot.com",
            messagingSenderId: "487733477630"
        };
        
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, { }, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
    
}

export default App;