import {
    COMPANY_DETAIL_REQUEST,
    COMPANY_DETAIL_SUCCESS,
    COMPANY_DETAIL_FAILURE,
    CLEAR_COMPANY_DETAIL
} from '../actions/companyDetailAction';


export function CompanyDetailReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case COMPANY_DETAIL_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case COMPANY_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data
            });
        case COMPANY_DETAIL_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: true
            });
        case CLEAR_COMPANY_DETAIL:
            return Object.assign({}, state, {
                data: null
            });
    }
    return state;
}
