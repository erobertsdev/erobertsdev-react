import React, { Component } from 'react';
import Devcard from './Devcard';
import './Development.css';

class Development extends Component {
	static defaultProps = {
		development: [
			{
				title: 'HTML',
				icon: 'fab fa-html5 Devcard-icon'
			},
			{
				title: 'CSS',
				icon: 'fab fa-css3-alt Devcard-icon'
			},
			{
				title: 'React',
				icon: 'fab fa-react Devcard-icon'
			},
			{
				title: 'JavaScript',
				icon: 'fab fa-js Devcard-icon'
			},
			{
				title: 'Node.js',
				icon: 'fab fa-node Devcard-icon'
			},
			{
				title: 'SQL/NoSQL',
				icon: 'fas fa-database Devcard-icon'
			}
		]
	};
	render() {
		return (
			<div className="Development" id="development">
				<h3 className="Development-title">Development</h3>
				<div className="Development-cards">
					{this.props.development.map((card, i) => <Devcard key={i} title={card.title} icon={card.icon} />)}
				</div>
			</div>
		);
	}
}

export default Development;
