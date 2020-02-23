import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div className="Contact" id="contact">
				<h3 className="Contact-title">Contact</h3>
				<form className="Contact-form" action="https://formspree.io/moqapzaz" method="POST">
					<label>
						<h4>Email</h4>
						<input
							className="Contact-input"
							type="email"
							name="_replyto"
							placeholder="Your Email"
							required
						/>
					</label>
					<label>
						<h4>Message</h4>
						<textarea className="Contact-textarea" name="message" placeholder="Your Message" required />
					</label>
					<button className="Contact-btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Contact;
