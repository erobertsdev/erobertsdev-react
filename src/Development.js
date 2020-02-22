import React, { Component } from 'react';
import Devcard from './Devcard';
import './Development.css';

class Development extends Component {
	static defaultProps = {
		development: [
			{
				id: 1,
				title: 'HTML',
				icon: 'fab fa-html5 Devcard-icon'
			},
			{
				id: 2,
				title: 'CSS',
				icon: 'fab fa-css3-alt Devcard-icon'
			},
			{
				id: 3,
				title: 'React',
				icon: 'fab fa-react Devcard-icon'
			},
			{
				id: 4,
				title: 'JavaScript',
				icon: 'fab fa-js Devcard-icon'
			},
			{
				id: 5,
				title: 'Node.js',
				icon: 'fab fa-node Devcard-icon'
			},
			{
				id: 6,
				title: 'SQL/NoSQL',
				icon: 'fas fa-database Devcard-icon'
			}
		]
	};
	render() {
		return (
			<div className="Development">
				<h3 className="Development-title">Development</h3>
				<div className="Development-cards">
					{this.props.development.map((card) => (
						<Devcard key={card.id} title={card.title} icon={card.icon} />
					))}
				</div>
			</div>
		);
	}
}

export default Development;
