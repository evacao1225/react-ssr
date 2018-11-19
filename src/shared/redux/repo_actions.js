// ismorphic-fetch is implementation of fetch for both node.js and browser
import fetch from 'isomorphic-fetch';

export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REJECT_REPOS = 'REJECT_REPOS';

function requestRepos() {
	return {
		type: REQUEST_REPOS
	};
}

function receiveRepos(json) {
	return {
		type: RECEIVE_REPOS,
		repos: json
	};
}

function rejectRepos(error) {
	return {
		type: REJECT_REPOS,
		error: error
	};
}

function fetchRepos() {
	return dispatch => {
		dispatch(requestRepos());
		return fetch(`https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories&page=1&per_page=5`)
			.then(response => response.json())
			.then(json => dispatch(receiveRepos(json)))
			.catch((error) => {
				console.log(`error happened: ${JSON.stringify(error)}`);
				console.warn(error);
				dispatch(rejectRepos(error));
			});
	};
}

function shouldFetchRepos(state) {
	console.log(`entering shouldFetchRepos: ${JSON.stringify(state)}`);
	const repos = state.repos;
	if(repos.data.length === 0) {
		console.log(`exiting shouldFetchRepos with true`);
		return true;
	} else if(repos.isFetching) {
		console.log(`exiting shouldFetchRepos with false`);
		return false;
	}
}

export function fetchReposIfNeeded() {
	console.log(`fetchReposIfNeeded`);
	return (dispatch, getState) => {
		if(shouldFetchRepos(getState())) {
			console.log('fetching repos from remote...');
			return dispatch(fetchRepos());
		}
	};
}
