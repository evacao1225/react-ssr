import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchAppsIfNeeded } from '../redux/movie_actions'
import Card from './card';

class Movies extends Component {

	componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }

	render() {
		const { isFetching, data: apps } = this.props
    let totalapps = apps.length;

		return (
			<Fragment>
				{isFetching && apps.length === 0 && <h2>Loading...</h2>}
				{!isFetching && apps.length === 0 && <h2>Empty.</h2>}
				<Card apps={apps} totalapps={totalapps} />
		  </Fragment>
		);
	}
}

function mapStateToProps(state) {
  const { apps } = state
 
  return apps;
}

export default connect(mapStateToProps)(Movies);
