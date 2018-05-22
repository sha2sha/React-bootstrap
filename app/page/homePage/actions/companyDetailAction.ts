import { CALL_API } from '../../../middlewares/api';
import * as api from '../../../services/api';
export const COMPANY_DETAIL_REQUEST = 'COMPANY_DETAIL_REQUEST';
export const COMPANY_DETAIL_SUCCESS = 'COMPANY_DETAIL_SUCCESS';
export const COMPANY_DETAIL_FAILURE = 'COMPANY_DETAIL_FAILURE';
export const CLEAR_COMPANY_DETAIL = 'CLEAR_COMPANY_DETAIL';

export interface companyDetailActionInterface {
    getCompanyDetailAction?(params: any): Function;
    clearCompanyDetailAction?(): Function;
}

function getCompanyDetail(parentAccountName) {
    return {
        [CALL_API]: {
            types: [
                COMPANY_DETAIL_REQUEST,
                COMPANY_DETAIL_SUCCESS,
                COMPANY_DETAIL_FAILURE
            ],
            url: api.getDataApiBaseUrl(),
            method: 'GET',
            data: null
        },
        actionData: {
            errorMessage: 'Company detail get failed'
        }
    }
}

function clearCompanyDetail() {
    return {
        type: CLEAR_COMPANY_DETAIL,
    }
}

export function getCompanyDetailAction(params: any): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(getCompanyDetail(params.parentAccountName));
    }
}

export function clearCompanyDetailAction(): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(clearCompanyDetail());
    }
}
