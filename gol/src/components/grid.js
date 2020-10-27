/** @format */

import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import glider from "../assets/images/Game_of_life_animated_glider.gif";
import toad from "../assets/images/Game_of_life_toad.gif";
import pulsar from "../assets/images/Game_of_life_pulsar.gif";

const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];
let speed = 50;

let numRows = 50;
let numCols = 50;

const Grid = () => {
	const [generation, setGeneration] = useState(0);
	const [running, setRunning] = useState(false);

	function setIsAlive(col, row) {
		if (!running) {
			setGrid((grid) =>
				produce(grid, (copy) => {
					copy[col][row].isAlive = !copy[col][row].isAlive;
				})
			);

			setGeneration(0);
		}
	}

	const generateEmptyGrid = () => {
		const rows = [];
		for (let i = 0; i < numRows; i++) {
			rows.push(Array.from(Array(numCols), () => 0));
		}

		return rows;
	};

	const [grid, setGrid] = useState(() => {
		const rows = [];
		for (let i = 0; i < numRows; i++) {
			rows.push(Array.from(Array(numCols), () => 0));
		}

		return rows;
	});

	const runningRef = useRef(running);
	runningRef.current = running;

	const Next = useCallback(() => {
		setGrid((g) =>
			produce(g, (gridCopy) => {
				for (let i = 0; i < numRows; i++) {
					for (let k = 0; k < numCols; k++) {
						let neighbors = 0;

						operations.forEach(([x, y]) => {
							const newI = i + x;
							const newK = k + y;
							if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
								neighbors += g[newI][newK];
							}
						});

						if (neighbors < 2 || neighbors > 3) {
							gridCopy[i][k] = 0;
						} else if (g[i][k] === 0 && neighbors === 3) {
							gridCopy[i][k] = 1;
						}
					}
				}
			})
		);

		setGeneration((generation) => generation + 1);
	}, []);

	const runSimulation = useCallback(() => {
		if (!runningRef.current) {
			return;
		}

		Next();

		setTimeout(runSimulation, speed);
	}, []);

	return (
		<div>
			<div>
				
				<hr></hr>
				<h2>Controls:</h2>
				<p>Start will start the Simulation, and will change to Stop so you can stop the simulation.</p>
				<p>Random will fill the grid with random Living Cells.</p>
				<p>Clear will remove all Living Cells whatever the Grid size.</p>
				<p>100 Row Random will make a 100x100 grid with Random living Cells, as will the 25x25.</p>
				<p>Default will bring you back to a 50x50 grid and clear it.</p>
				<p>Slow will run at 1000 milliseconds per frame, and Fast will run at 50 milliseconds per frame.</p>
				<p>You can poke every cell to make alive or dead, but will be unable to use most controls including making cells while the simulation is running.</p>
				<p>The Generation count will tell you how many frames have gone by since starting the Simulation.</p>
				<h3>Enjoy!</h3>
				<hr></hr>
			</div>
			<div>
				<div>
					<button disabled={running}
						onClick={() => {
							numRows = 100;
							numCols = 100;
							const rows = [];
							const cols = 100;
							for (let i = 0; i < 100; i++) {
								rows.push(
									Array.from(Array(numCols), () =>
										Math.random() > 0.7 ? 1 : 0
									)
								);
							}
							setGrid(rows, cols);
							setGeneration(0);
						}}>
						100 Row Random
					</button>
					<button disabled={running}
						onClick={() => {
							numRows = 25;
							numCols = 25;
							const rows = [];
							const cols = 25;
							for (let i = 0; i < 25; i++) {
								rows.push(
									Array.from(Array(numCols), () =>
										Math.random() > 0.7 ? 1 : 0
									)
								);
							}
							setGrid(rows, cols);
							setGeneration(0);
						}}>
						25 Row Random
					</button>
					<button disabled={running}
						onClick={() => {
							numRows = 50;
							numCols = 50;
							setGrid(generateEmptyGrid());
							setGeneration(0);
						}}>
						Default
					</button>
				</div>
				<button
					onClick={() => {
						setRunning(!running);
						if (!running) {
							runningRef.current = true;
							runSimulation();
						}
					}}>
					{running ? 'Stop' : 'Start'}
				</button>
				<button disabled={running}
					onClick={() => {
						const rows = [];
						for (let i = 0; i < numRows; i++) {
							rows.push(
								Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
							);
						}

						setGrid(rows);
						setGeneration(0);
					}}>
					Random
				</button>
				<button disabled={running}
					onClick={() => {
						setGrid(generateEmptyGrid());
						setGeneration(0);
					}}>
					Clear
				</button>
				<button
					onClick={() => {
						speed = 1000;
					}}>
					Slow
				</button>
				<button
					onClick={() => {
						speed = 25;
					}}>
					Fast
				</button>
				<button disabled={running} onClick={Next}>
					Next
				</button>
				Generation: {generation}
			</div>
			<center>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: `repeat(${numCols}, 10px)`,
					}}>
					{grid.map((rows, i) =>
						rows.map((col, k) => (
							<div
								key={`${i}-${k}`}
								onClick={() => {
									if (!running) {
										const newGrid = produce(grid, (gridCopy) => {
											gridCopy[i][k] = grid[i][k] ? 0 : 1;
										});

										setGrid(newGrid);
									}
								}}
								style={{
									width: 10,
									height: 10,
									backgroundColor: grid[i][k] ? 'blue' : undefined,
									border: 'solid 1px black',
								}}
							/>
						))
					)}
				</div>
				<div><p>A few things to try.</p>
				<p>Glider: <img src={glider}/>  
				Toad: <img src={toad} />  
				Pulsar: <img src={pulsar} /></p></div>
			</center>
		</div>
	);
};

export default Grid;
