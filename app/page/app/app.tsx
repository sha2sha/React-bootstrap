import * as React from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes/components/Routes';
import { stateInterface } from '../../store/store';
import { setCurrentLocationAction, locationActionsInterface } from './actions/locationActions';
declare var google: any;


interface Props extends locationActionsInterface {
}

class App extends React.Component<Props, any> {
    constructor(props, state) {
        super(props, state)
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <Routes />
        );
    }
}

export default connect((state: stateInterface) => {
    return {}
},
    {
        setCurrentLocationAction
    }
)(App);
