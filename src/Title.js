import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
	render() {
		return (
			<div className="Title">
				<div className="Title-text">
					<h1 className="Title-main">Elias Roberts</h1>
					<hr className="Title-hr" />
					<h2 className="Title-sub">Web Development</h2>
				</div>
			</div>
		);
	}
}

export default Title;
