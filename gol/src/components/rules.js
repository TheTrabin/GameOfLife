/** @format */

import React from 'react';

const Rules = () => {
	return (
		<div>
			<center>
				<h3>The Rules</h3>
				<p>Well, it's Cellular Automata, or an Example of such.</p>
				<hr></hr>
				<p>
					It involves (usually) a 2D (two dimensional) grid in which involves
					rows and columns of Cells,<br></br> or what I mean by that is a large
					grid of squares, or however connected shapes.
					<br></br>Take a Square, say 25x25 pixels for an example. Each Pixel is
					a cell.
					<br></br>Now, each moment, the grid is checked for 1s and 0s, binary
					system. If it's alive, it's a 1. If it's dead, it's a 0.
				</p>
				<hr></hr>
				<p>But what determines what is alive and what's dead?</p>

				<p>Well, let's look it over.</p>

				<p>In one generation, or a frame, or one stage of run-time:</p>

				<p>
					The cell is alive and remains alive as long as 2-3 adjacent cells are
					also alive. <br></br>This means that there's something in that cell.
					So, a 1. Or in the representation, the opposite color of Dead.
				</p>

				<h4>Well, What's a Dead Cell?</h4>
				<p>
					A Dead Cell, or a 0, is absent of anything. Otherwise it's alive, or a
					1.
				</p>

				<h4>But how does it become alive?</h4>
				<p>
					It has to have exactly 3 adjacent living cells. Otherwise it stays
					empty. No 1s, just 0.
				</p>

				<p>
					So, these create groups of cells, or creatures. Whatever you want to
					call them,
				</p>
				<p>
					And they move together as a conglomerate of various different things
					about the grid.
				</p>
				
				<hr></hr>
				<h2>Rule Recap</h2>
				<p>
					If the cell is <strong>alive</strong> and has{' '}
					<strong>2 or 3 neighbors</strong>, then it remains{' '}
					<strong>alive</strong>. Else it <strong>dies</strong>.
				</p>
				<p>
					If the cell is dead and has <strong>exactly 3 neighbors</strong>, then
					it comes to life. Else if remains <strong>dead</strong>.
				</p>
			</center>
		</div>
	);
};

export default Rules;
