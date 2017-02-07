import { FETCH_WEATHER } from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_WEATHER:
        //    return state.concat([action.payload.data]);  <<to iste ☻
            return [ action.payload.data, ...state];
    }
    return state;
}