import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<p className="Footer-copyright">&copy; 2020 Elias Roberts</p>
				<p className="Footer-p">
					<a
						href="https://github.com/erobertsdev/erobertsdev-react"
						target="_blank"
						rel="noopener noreferrer"
					>
						Site built w/ React
					</a>. All components and projects found on this site were designed and built by me, Elias Roberts.
					If you'd like to contact me, you can fill out the contact form or email me directly at{' '}
					<a href="mailto:elias@eroberts.dev">elias@eroberts.dev</a>.
				</p>
				<p className="Footer-soc">
					<a href="https://github.com/erobertsdev" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github-square Footer-icon" />
					</a>
				</p>
			</div>
		);
	}
}

export default Footer;
