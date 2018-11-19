import React, { Component } from 'react';
import ItemLeft from './item-left';
import ItemRight from './item-right';

class Item extends Component {
	ItemBaker(props) {
		let items = [], itemNumber = 1;

		for(let item of props.data) {
			items.push(
				<div className="proj-item" key={item.name}>
					<ItemLeft
						star={item.stargazers_count}
						fork={item.forks}
						order={itemNumber}
						total={props.total}
					/>
					<ItemRight
						name={item.name}
						des={item.description}
						author={item.owner.login}
						html_url={item.owner.html_url}
						clone_url={item.clone_url}
						homepage={item.homepage}
					/>
				</div>
			);
			itemNumber++;
		}
		return (<div>{items}</div>);
	}

	render() {
		return (
			<this.ItemBaker data={this.props.data} total={this.props.total} />
		);
	}
}

export default Item;
