import React from 'react';

const ERROR = "Opps, there is something wrong.";
export default function Error(props) {
	let error_msg = Object.keys(props.error).length === 0 ? ERROR : props.error.text();
	return (
		<div className="error-card">
			<Title name="Error happened..." />
			<hr />
			<div className="app-intro" dangerouslySetInnerHTML={{__html: error_msg}} />
		</div>
	);
}
