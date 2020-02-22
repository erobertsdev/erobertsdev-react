import React from 'react';
import Menu from './Menu';
import Title from './Title';
import Development from './Development';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Menu />
			<Title />
			<Development />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
