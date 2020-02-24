import React, { Component } from 'react';
import Projectcard from './Projectcard';
import './Projects.css';

class Projects extends Component {
	static defaultProps = {
		projects: [
			{
				title: 'RRobertsPhoto',
				desc: 'R. Roberts Photography Gallery',
				icon: 'fas fa-camera Projectcard-icon',
				list: [ 'HTML', 'CSS', 'JavaScript' ],
				url: 'https://eroberts.dev/rrobertsphoto/index.html',
				github: 'https://github.com/erobertsdev/rrobertsphoto'
			},
			{
				title: 'Elias.codes',
				desc: 'Blog About Tech',
				icon: 'fas fa-blog Projectcard-icon',
				list: [ 'HTML', 'CSS', 'Node.js', 'Express', 'EJS', 'MongoDB' ],
				url: 'https://elias.codes',
				github: 'https://github.com/erobertsdev/elias-codes'
			},
			{
				title: 'E.aRcade',
				desc: 'Game Projects',
				icon: 'fas fa-gamepad Projectcard-icon',
				list: [ 'HTML', 'CSS', 'JavaScript' ],
				url: 'https://eroberts.dev/arcade',
				github: 'https://github.com/erobertsdev/e-arcade'
			},
			{
				title: 'CSS Weather',
				desc: 'Weather w/ Animations',
				icon: 'fas fa-cloud-sun-rain Projectcard-icon',
				list: [ 'HTML', 'Sass', 'JavaScript' ],
				url: 'https://eroberts.dev/weather/index.html',
				github: 'https://github.com/erobertsdev/weather-app'
			},
			{
				title: 'HydroResolutions',
				icon: 'fas fa-water Projectcard-icon',
				desc: 'HydroResolutions LLC Company Site',
				list: [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery' ],
				url: 'https://hydroresolutions.com',
				github: 'https://github.com/erobertsdev'
			}
		]
	};
	render() {
		return (
			<div className="Projects" id="projects">
				<h3 className="Projects-title">Projects</h3>
				<div className="Projects-cards">
					{this.props.projects.map((card, i) => (
						<Projectcard
							key={i}
							title={card.title}
							url={card.url}
							desc={card.desc}
							icon={card.icon}
							list={card.list}
							github={card.github}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Projects;
