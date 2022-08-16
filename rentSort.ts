interface House {
	id: number;
	rent: number;
};

const houses = [
	{id: 1, rent: 150000},
	{id: 2, rent: 139000},
	{id: 3, rent: 139000},
	{id: 4, rent: 142000},
	{id: 5, rent: 147000},
	{id: 6, rent: 120000},
	{id: 7, rent: 141000},
	{id: 8, rent: 120000},
	{id: 9, rent: 148000},
	{id: 10, rent: 140000},
	{id: 11, rent: 145000},
	{id: 12, rent: 127000},
	{id: 13, rent: 123000},
	{id: 14, rent: 149000},
	{id: 15, rent: 143000},
	{id: 16, rent: 127000},
	{id: 18, rent: 144000},
	{id: 19, rent: 142500},
	{id: 20, rent: 143000},
	{id: 21, rent: 149500},
	{id: 22, rent: 130000},
	{id: 23, rent: 120000},
	{id: 24, rent: 132000},
];

const rentSort = (houses: House[]) => {
	let temp;
	for (let i = 0; i < houses.length - 1; i++) {
		for (let j = 0; j < houses.length - 1; j++) {
			if (houses[j].rent > houses[j + 1].rent) {
				temp = houses[j]
				houses[j] = houses[j + 1]
				houses[j + 1] = temp
			}
		}
	}
	console.log(houses);
};

rentSort(houses);
