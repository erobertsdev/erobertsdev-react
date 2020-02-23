import React, { Component } from 'react';
import Projectcard from './Projectcard';
import './Projects.css';

class Projects extends Component {
	static defaultProps = {
		projects: [
			{
				id: 1,
				title: 'RRobertsPhoto',
				desc: 'R. Roberts Photography Gallery',
				list: [ 'HTML', 'CSS', 'JavaScript' ],
				url: 'https://eroberts.dev/rrobertsphoto/index.html',
				github: 'https://github.com/erobertsdev/rrobertsphoto'
			},
			{
				id: 2,
				title: 'Elias.codes',
				desc: 'Blog About Tech',
				list: [ 'HTML', 'CSS', 'Node.js', 'Express', 'EJS', 'MongoDB' ],
				url: 'https://elias.codes',
				github: 'https://github.com/erobertsdev/elias-codes'
			},
			{
				id: 3,
				title: 'E.aRcade',
				desc: 'Game Projects',
				list: [ 'HTML', 'CSS', 'JavaScript' ],
				url: 'https://eroberts.dev/arcade',
				github: 'https://github.com/erobertsdev/e-arcade'
			},
			{
				id: 4,
				title: 'CSS Weather',
				desc: 'Weather w/ Animations',
				list: [ 'HTML', 'Sass', 'JavaScript' ],
				url: 'https://eroberts.dev/weather/index.html',
				github: 'https://github.com/erobertsdev/weather-app'
			},
			{
				id: 5,
				title: 'HydroResolutions',
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
					{this.props.projects.map((card) => (
						<Projectcard
							key={card.id}
							title={card.title}
							url={card.url}
							desc={card.desc}
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
