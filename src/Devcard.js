import React, { Component } from 'react';
import './Devcard.css';

class Devcard extends Component {
	render() {
		return (
			<div className="Devcard">
				<h3 className="Devcard-title">{this.props.title}</h3>
				<i className={this.props.icon} />
			</div>
		);
	}
}

export default Devcard;
