import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';

class ItemLeft extends Component {
	numbersLeadingZero(props) {
		let count = 0;
		// append the leading zero(0) before the item number if it's less than 10
		count = (`0${props.order}`).slice(-2);
		return (
			<span className={props.withclass}>{count}</span>
		);
	}

	render() {
		return (
			<div className="col-left">
				<div className="app-no">
					<this.numbersLeadingZero order={this.props.order} withclass="current" />
					<span className="connector">of </span><br />
					<this.numbersLeadingZero order={this.props.total} withclass="total" />
				</div>
				<div className="proj-nowrap"><FontAwesomeIcon icon={faStar} color="#eec900" /> {this.props.star}</div>
				<div className="proj-nowrap"><FontAwesomeIcon icon={faShareAlt} color="#6495ed" /> {this.props.fork}</div>
			</div>
		);
	}
}

export default ItemLeft;
