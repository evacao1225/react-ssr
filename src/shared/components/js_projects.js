import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchReposIfNeeded } from '../redux/repo_actions';
import Item from './item';
import Error from './error';

class JSProjects extends Component {
	componentDidMount() {
		console.log(`js did mount: ${JSON.stringify(this.props)}`);
		const { dispatch } = this.props;
		dispatch(fetchReposIfNeeded());
	}

	render() {
		console.log(`js props: ${JSON.stringify(this.props)}`);
		const { isFetching, data: repos, error } = this.props;
		let totalRepos = repos.items ? repos.items.length : 0;
		//console.log(`totalRepos: ${totalRepos}`);
		return (
			<Fragment>
				{isFetching && repos.length === 0 && <h2>Loading...</h2>}
				{!isFetching && repos.length === 0 && !error && <h2>Empty!</h2>}
				{!isFetching && error && <Error error={error} />}
				<Item data={repos.items ? repos.items : []} total={totalRepos} />
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	const { repos } = state;
	return repos;
}

export default connect(mapStateToProps)(JSProjects);
