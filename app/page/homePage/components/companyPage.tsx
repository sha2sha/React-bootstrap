//container components
declare var require: any;
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as qs from 'query-string';
import * as Enumerable from 'linq';
import { stateInterface } from '../../../store/store';
import Header from '../../../componets/Header/header'
import {
    getCompanyDetailAction, clearCompanyDetailAction, companyDetailActionInterface
} from '../actions/companyDetailAction';


interface Props extends companyDetailActionInterface {
    location?: any;
    history?: any;
    match?: any;
    companyDetail: any
}
class CompanyPage extends React.Component<Props, any> {
    constructor(props, state) {
        super(props, state);
    }

    render() {
        return (
            <div>
                <Header showHome="false" /> </div>
        );
    }
}

export default connect<{}, {}, {}>((state: stateInterface) => {
    return {
        companyDetail: state.companyDetail
    }
},
    {
        getCompanyDetailAction,
        clearCompanyDetailAction
    }
)(withRouter(CompanyPage));
