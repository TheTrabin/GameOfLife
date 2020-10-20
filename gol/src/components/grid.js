/** @format */

import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

let numRows = 50;
let numCols = 50;

let interval = 50;
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

const generateEmptyGrid = () => {
	const rows = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0));
	}

	return rows;
};

const Grid = () => {
	const [grid, setGrid] = useState(() => {
		const rows = [];
		for (let i = 0; i < numRows; i++) {
			rows.push(Array.from(Array(numCols), () => 0));
		}

		return rows;
	});

	const [running, setRunning] = useState(false);

	const runningRef = useRef(running);
	runningRef.current = running;

	const runSimulation = useCallback(() => {
		if (!runningRef.current) {
			return;
		}

		setGrid((g) => {
			return produce(g, (gridCopy) => {
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
			});
		});

		setTimeout(runSimulation, interval);
	}, []);

	return (
		<div >
			<div >
				<div>
					<label className='label'>
						Rows:
						<input
							className='input'
							type='text'
							value={numRows}
							// onChange={this.handleRowChange}
						/>
					</label>
					<label className='label'>
						Columns:
						<input
							className='input'
							type='text'
							value={numCols}
							// onChange={this.handleColumnChange}
						/>
					</label>
					<label className='label'>
						Interval:
						<input
							className='input'
							type='text'
							value={interval}
							// onChange={this.changeInterval}
						/>
					</label>
				</div>
				<button
					onClick={() => {
						setRunning(!running);
						if (!running) {
							runningRef.current = true;
							runSimulation();
						}
					}}>
					{running ? 'stop' : 'start'}
				</button>
				<button
					onClick={() => {
						const rows = [];
						for (let i = 0; i < numRows; i++) {
							rows.push(
								Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
							);
						}

						setGrid(rows);
					}}>
					random
				</button>
				<button
					onClick={() => {
						setGrid(generateEmptyGrid());
					}}>
					clear
				</button>
				{/* Generation: {this.state.universe.getGeneration()} */}
			</div>
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
								const newGrid = produce(grid, (gridCopy) => {
									gridCopy[i][k] = grid[i][k] ? 0 : 1;
								});
								setGrid(newGrid);
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
		</div>
	);
};
export default Grid;
