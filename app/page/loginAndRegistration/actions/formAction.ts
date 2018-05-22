import { CALL_API } from "../../../middlewares/api";
import * as api from '../../../services/api';


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export interface formActionInterface {
    requestLoginAction?: Function;
    requestRegistrationAction?: Function;
    forgotPasswordAction?: Function;
    changePasswordAction?: Function;
}

function requestLogin(params: any, url) {
    return {
        [CALL_API]: {
            types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
            url: url,
            method: 'POST',
            data: params
        },
        actionData: {
            errorMessage: "Login Failed"
        }
    }
}

function requestRegistration(params: any, url) {
    return {
        [CALL_API]: {
            types: [REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE],
            url: url,
            method: 'POST',
            data: params
        },
        actionData: {
            errorMessage: "Registration Failed"
        }
    }
}

function forgotPassword(params: any, url) {
    return {
        [CALL_API]: {
            types: [FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE],
            url: url,
            method: 'POST',
            data: params
        },
        actionData: {
            errorMessage: "Forgot Password Token Failed"
        }
    }
}

function changePassword(params: any, url) {
    return {
        [CALL_API]: {
            types: [CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE],
            url: url,
            method: 'POST',
            data: {
                token: params.token,
                password: params.password,
                newPassword: params.newPassword
            }
        },
        actionData: {
            errorMessage: "Change Password Failed"
        }
    }
}

export function requestLoginAction(params): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(requestLogin(params, api.getApplicationApiBaseUrl() + '/login'));
    }
}

export function requestRegistrationAction(params): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(requestRegistration(params, api.getApplicationApiBaseUrl() + '/register'));
    }
}

export function forgotPasswordAction(params): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(forgotPassword(params, api.getApplicationApiBaseUrl() + '/forgotPassword'));
    }
}

export function changePasswordAction(params): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(changePassword(params, api.getApplicationApiBaseUrl() + '/resetPassword'));
    }
}
