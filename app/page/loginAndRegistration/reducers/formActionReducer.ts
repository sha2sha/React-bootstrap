import {
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE,
    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE,
    CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE
} from '../actions/formAction';

export function UserRegistrationReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                success: null,
                data: null
            });
        case REGISTRATION_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                success: true,
                data: action.response.data
            });
        case REGISTRATION_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                success: false,
                data: action.error
            });
    }
    return state;
}

export function ForgotPasswordReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                message: null,
                success: null
            });
        case FORGOT_PASSWORD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                success: true,
                message: action.response.data
            });
        case FORGOT_PASSWORD_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                success: false,
                message: action.error
            });
    }
    return state;
}

export function ChangePasswordReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                success: null,
                data: null
            });
        case CHANGE_PASSWORD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                success: true,
                data: action.response.data
            });
        case CHANGE_PASSWORD_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                success: false,
                data: action.error
            });
    }
    return state;
}
