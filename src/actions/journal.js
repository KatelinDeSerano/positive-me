import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_JOURNAL_SUCCESS = 'FETCH_JOURNAL_SUCCESS';
export const fetchJournalSuccess = data => ({
    type: FETCH_JOURNAL_SUCCESS,
    data
});

export const FETCH_JOURNAL_ERROR = 'FETCH_JOURNAL_ERROR';
export const fetchJournalError = error => ({
    type: FETCH_JOURNAL_ERROR,
    error
});

export const fetchJournal = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchJournalSuccess(data)))
        .catch(err => {
            dispatch(fetchJournalError(err));
        });
};
