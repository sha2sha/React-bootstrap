'use strict';
declare var require: any;
import { createStore, combineReducers, Store, applyMiddleware, Middleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { IRouterState } from "react-router-redux";
import { Location } from 'history';
import * as Cookies from 'js-cookie';
import { reducer as formReducer } from 'redux-form';
let batch = require('redux-batched-actions');
import api from '../middlewares/api';

import { CompanyDetailReducer } from "../page/homePage/reducers/companyDetailReducer"
import { SessionReducer } from '../page/loginAndRegistration/reducers/sessionReducer';
import {
    UserRegistrationReducer,
    ForgotPasswordReducer,
    ChangePasswordReducer
} from '../page/loginAndRegistration/reducers/formActionReducer';
import { LocationReducer } from '../page/app/reducers/locationReducer';
import { ReactRestReducer } from './reactRestReducer';
import { EntitySaveServiceReducer } from './entitySaveServiceReducer';
import { EntitySaveService } from '../common/entity-save-service';
import { ReactRest } from '../common/react-rest';

let userFromCookie = Cookies.get("user");

export interface stateInterface {
    form: any,
    session: any,
    companyDetail: any,
    ReactRest: ReactRest,
    EntitySaveService: EntitySaveService
}

const reduxRouterMiddleware: Middleware = routerMiddleware(browserHistory);

const appReducer = combineReducers<stateInterface>({
    companyDetail: CompanyDetailReducer,
    session: SessionReducer,
    userRegistration: UserRegistrationReducer,
    forgotPassword: ForgotPasswordReducer,
    changePassword: ChangePasswordReducer,
    form: formReducer,
    ReactRest: ReactRestReducer,
    EntitySaveService: EntitySaveServiceReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};



const initialState = <stateInterface>{
    form: <any>{},
    session: {
        loggingIn: false,
        loggingOut: false,
        message: null,
        error: false,
        loggedIn: !!localStorage.accessToken && !!localStorage.email,
        username: (localStorage.username) ? localStorage.username : null,
        email: (localStorage.email) ? localStorage.email : null,
        jobTitle: (localStorage.jobTitle) ? localStorage.jobTitle : null,
        isSupplier: (localStorage.isSupplier && localStorage.isSupplier === 'true') ? true : false,
        accessToken: (localStorage.accessToken) ? localStorage.accessToken : null,
        supplierCompanyId: (localStorage.supplierCompanyId) ? JSON.parse(localStorage.supplierCompanyId) : null,
        fromVerification: (localStorage.fromVerification && localStorage.fromVerification === 'true') ? true : false
    },
    companyDetail: {
        loading: false,
        data: null,
        error: false
    },
    ReactRest: new ReactRest(),
    EntitySaveService: new EntitySaveService()
};
//const store = createStore(
// reducer,
// preloadedState,
// applyMiddleware(...middleware)
//)

const store: Store<any> = applyMiddleware(reduxRouterMiddleware, thunk, api)(createStore)(batch.enableBatching(rootReducer), initialState);
export default store;

//store.getState(); 
//store.dispatch({type:'INC'})
//store.subscribe(()=>{}) when action has been dispatced 
