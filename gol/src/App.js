/** @format */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from './components/grid';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Rules from './components/rules.js';
import Footer from './components/footer.js';
import './App.css';
import styled from "styled-components";







function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Route exact path='/'><Home /></Route>
				<Route exact path='/Rules'><Rules /></Route>
				<Route exact path='/Game'><Grid /></Route>
				<Footer />
				
			</Router>
		</div>
	);
}

export default App;
