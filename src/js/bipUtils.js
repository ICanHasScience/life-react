import _ from 'lodash';

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

function livingNeighbors(bipsArray, currentBip) {
	let neighborsAlive = -1 * currentBip.alive;
	let xMin = currentBip.x < 1 ? 0 : currentBip.x - 1
	let yMin = currentBip.y < 1 ? 0 : currentBip.y - 1
	let xMax = currentBip.x >= bipsArray.length - 1 ? bipsArray.length - 2 : currentBip.x + 1;
	let yMax = currentBip.y >= bipsArray[0].length - 1 ? bipsArray[0].length - 2 : currentBip.y + 1;

	for(let x = xMin; x <= xMax; x++ ) {
		for(let y = yMin; y <= yMax; y++) {
			neighborsAlive += (bipsArray[x][y].alive * 1);
		}
	}
	return neighborsAlive;
}

export function repopulateBips(bipsArray) {
	let newBips = _.cloneDeep(bipsArray);
	newBips.forEach( arr => {
		arr.forEach( bip => {
			if (bip.alive && livingNeighbors(bipsArray, bip) < 2) {
				bip.alive = false;
			} else if (bip.alive && (livingNeighbors(bipsArray, bip) == 2 || livingNeighbors(bipsArray, bip) == 3)) {
				bip.alive = true;
			} else if (bip.alive && livingNeighbors(bipsArray, bip) > 3) {
				bip.alive = false;
			} else if (!bip.alive && livingNeighbors(bipsArray, bip) == 3) {
				bip.alive = true;
			}
		});
	});
	return newBips;
}
