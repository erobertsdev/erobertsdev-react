import React, { Component } from 'react';
import './Projectcard.css';

class Projectcard extends Component {
	render() {
		return (
			<div className="Projectcard">
				<a href={this.props.url} rel="noopener noreferrer" target="_blank">
					<h3 className="Projectcard-title">{this.props.title}</h3>
					<i className={this.props.icon} />
					<hr className="Projectcard-hr" />
					<p className="Projectcard-desc">{this.props.desc}</p>
				</a>
				<ul className="Projectcard-list">{this.props.list.map((e, i) => <li key={i}>{e}</li>)}</ul>
				<a href={this.props.github} rel="noopener noreferrer" target="_blank">
					<i className="fab fa-github-square Projectcard-icon" />
				</a>
			</div>
		);
	}
}

export default Projectcard;
