import React from 'react';

export default function Error(props) {
	return (
		<div className="error-card">
			<Title name="Error happened..." />
			<hr />
			<div className="app-intro" dangerouslySetInnerHTML={{__html: JSON.stringify(props.message)}} />
		</div>
	);
}
