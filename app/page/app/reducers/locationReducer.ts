import {
    SET_CURRENT_LOCATION
} from '../actions/locationActions';


export function LocationReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return Object.assign({}, state, {
                address: action.data.address,
                lat: action.data.lat,
                lng: action.data.lng
            });
    }
    return state;
}
