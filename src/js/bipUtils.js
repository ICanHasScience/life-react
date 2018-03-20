export function initializeBips(xSize, ySize, initialBips) {
	let newBips = [];
	for (let x = 0; x < xSize; x++) {
		let xRow = [];
		for (let y = 0; y < ySize; y++) {
			xRow.push({x: x, y: y, alive: false})
		}
		newBips.push(xRow);
	}
	return newBips;
}

export function initializeRandomBips(xSize, ySize, initialBips) {
	let newBips = [];
	for (let x = 0; x < xSize; x++) {
		let xRow = [];
		for (let y = 0; y < ySize; y++) {
			xRow.push({x: x, y: y, alive: Math.floor(Math.random() * 2)})
		}
		newBips.push(xRow);
	}
	return newBips;
}

