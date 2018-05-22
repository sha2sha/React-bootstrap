import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/formAction';

export function SessionReducer(state = <any>{}, action: any): any {
    let fromVerification = false;
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loggingIn: true
            });  //return [...state,{ loggingIn: true}]
        case LOGIN_SUCCESS:
            const { name, lastName, email, accessToken, isSupplier, supplierCompanyId, jobTitle } = action.response.data.user;
            localStorage.setItem('email', email);
            localStorage.setItem('username', name + ' ' + lastName);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('isSupplier', (isSupplier) ? 'true' : 'false');
            localStorage.setItem('jobTitle', jobTitle);
            localStorage.setItem('supplierCompanyId', supplierCompanyId ? JSON.stringify(supplierCompanyId) : null);
            return Object.assign({}, state, {
                loggingIn: false,
                loggedIn: true,
                username: name + ' ' + lastName,
                email, isSupplier, accessToken,
                supplierCompanyId, fromVerification, jobTitle
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                loggingIn: false,
                error: true,
                message: action.error
            });
    }
    return state;
}
