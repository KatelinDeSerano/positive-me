import {
    FETCH_JOURNAL_SUCCESS,
    FETCH_JOURNAL_ERROR
} from '../actions/journal';

const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_JOURNAL_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_JOURNAL_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
