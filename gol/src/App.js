/** @format */

import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from './components/grid';
import Navbar from './components/navbar.js';
import './App.css';

function App() {
	return (
		<div>
			<Router>
        <Navbar />
				<Grid />
			</Router>
		</div>
	);
}

export default App;
