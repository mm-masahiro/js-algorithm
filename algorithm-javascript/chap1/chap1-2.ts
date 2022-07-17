const insert = (array: number[], insertValue: number, insertIndex: number): number[] => {
	const tempArray = [];
	for (let i = 0; i < array.length; i++) {
		if (i !== insertIndex) {
			tempArray[i] = array[i];
		} else {
			tempArray[i] = insertValue;
		}
	};
	return tempArray;
};

let scores1_2 = [90, 70, 50, 80, 60, 85];

scores1_2 = insert(scores1_2, 75, 2);

console.log(scores1_2);
