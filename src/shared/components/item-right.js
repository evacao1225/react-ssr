import React, { Component } from 'react';
import Title from './title';

class ItemRight extends Component {
	render() {
		return (
			<div className="col-right">
				<div className="app-meta">
					<Title name={this.props.name} publisher={this.props.author} />
				</div>
				<div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.des}} />
				<hr />
				<div className="app-link">
					{this.props.homepage !== null && this.props.homepage.trim() !== "" &&
						<a className="btn" href={this.props.homepage} target="_blank">Go to homepage</a>
					}
					<a className="btn btn-twitter" href={this.props.html_url} target="_blank">Go to Github</a>
				</div>
			</div>
		);
	}
}

export default ItemRight;
