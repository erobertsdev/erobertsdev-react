import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<input type="checkbox" className="Menu-checkbox" id="Menu-toggle" />

				<label htmlFor="Menu-toggle" className="Menu-btn">
					<i className="fas fa-bars Menu-icon" />
				</label>

				<div className="Menu-background">&nbsp;</div>

				<nav className="Menu-nav">
					<ul className="Menu-list">
						<li className="Menu-item">
							<a href="#development" className="Menu-link">
								Development
							</a>
						</li>
						<li className="Menu-item">
							<a href="#projects" className="Menu-link">
								Projects
							</a>
						</li>
						<li className="Menu-item">
							<a href="#contact" className="Menu-link">
								Contact
							</a>
						</li>
						<li className="Menu-item">
							<a
								href="https://elias.codes"
								className="Menu-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Blog
							</a>
						</li>
						<li className="Menu-item">
							<a
								href="https://github.com/erobertsdev"
								target="_blank"
								rel="noopener noreferrer"
								className="Menu-link"
							>
								<i className="fab fa-github-square Menu-icon" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu;
