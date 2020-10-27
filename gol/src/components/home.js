/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<hr></hr>
			<div>
				<p>
					Navigation:{' '}
					<ul>
						<li>
							<Link to={'/'}>Home</Link> - Leads you to this page.
						</li>
						<li>
							<Link to={'/Rules'}>Rules</Link> - The rules of the game.
						</li>
						<li>
							<Link to={'/Game'}>Game</Link> - To play the Game of Life.
						</li>
					</ul>{' '}
					All can be navigated to with the buttons at the top.
				</p>
				<hr></hr>

				<h1>Welcome to Conway's Game of Life</h1>

				<h2>A brief history on The Game of Life.</h2>

				<p>
					In late 1940, John von Neumann defined life as a creation (as a being
					or organism) which can reproduce itself and simulate a Turing machine.
				</p>
				<p>
					{' '}
					Von Neumann was thinking about an engineering solution which would use
					electromagnetic components floating randomly in liquid or gas. This
					turned out not to be realistic with the technology available at the
					time. Stanislaw Ulam invented cellular automata, which were intended
					to simulate von Neumann's theoretical electromagnetic constructions.
					Ulam discussed using computers to simulate his cellular automata in a
					two-dimensional lattice in several papers. In parallel, von Neumann
					attempted to construct Ulam's cellular automaton. Although successful,
					he was busy with other projects and left some details unfinished. His
					construction was complicated because it tried to simulate his own
					engineering design. Over time, simpler life constructions were
					provided by other researchers, and published in papers and books.
				</p>

				<p>
					Motivated by questions in mathematical logic and in part by work on
					simulation games by Ulam, among others, John Conway began doing
					experiments in 1968 with a variety of different two-dimensional
					cellular automaton rules.[3] Conway's initial goal was to define an
					interesting and unpredictable cell automaton. For example, he wanted
					some configurations to last for a long time before dying and other
					configurations to go on forever without allowing cycles. It was a
					significant challenge and an open problem for years before experts on
					cellular automata managed to prove that, indeed, the Game of Life
					admitted of a configuration which was alive in the sense of satisfying
					Von Neumann's two general requirements. While the definitions before
					the Game of Life were proof-oriented, Conway's construction aimed at
					simplicity without a priori providing proof the automaton was alive.
				</p>
				<hr></hr>
				<h2>What I used as a base and information for this project.</h2>
				<p>
					<a href='https://www.youtube.com/watch?v=DvVt11mPuM0'>
						[React Hooks Project Tutorial - Game of Life]
					</a>
					<br></br>This got me going with building the project.{' '}
				</p>
				<p>
					<a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns'>
						[wikipedia - Conway's game of life]
					</a>{' '}
					<br></br>The Standard info via Wikipedia.
				</p>
				<p>
					<a href='https://bitstorm.org/gameoflife/'>
						[Bistorm.org - Game of Life]
					</a>{' '}
					<br></br>A well made example and explaination.{' '}
				</p>
				<p>
					<a href='https://playgameoflife.com/'>[game of life official page]</a>
					<br></br> A Better Example.
				</p>
			</div>
		</div>
	);
};

export default Home;
