import { REQUEST_REPOS, RECEIVE_REPOS, REJECT_REPOS } from './repo_actions';

function repos( state = {isFetching: false, data: []}, action) {
	switch (action.type) {
		case REQUEST_REPOS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_REPOS:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.repos
			});
		case REJECT_REPOS:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			});
		default:
			return state;
	}
}

export default repos;
