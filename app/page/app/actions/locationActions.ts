export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';

export interface locationActionsInterface {
    setCurrentLocationAction?: Function;
}

function setCurrentLocation(params) {
    return {
        type: SET_CURRENT_LOCATION,
        data: {
            address: params.address,
            lat: params.lat,
            lng: params.lng
        }
    }
}

export function setCurrentLocationAction(params): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(setCurrentLocation(params));
    }
}
