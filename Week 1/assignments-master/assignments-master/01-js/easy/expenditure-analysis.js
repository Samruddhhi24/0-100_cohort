/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i = 0; i < transactions.length; i++) {
    let sum = 0;
    let category1 = transactions[i].category;
    let categoryExists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j].category === category1) {
        categoryExists = true;
        break;
      }
    }

    if (!categoryExists) {
      for (let j = 0; j < transactions.length; j++) {
        if (category1 === transactions[j].category) {
          sum += transactions[j].price;
        }
      }

      result.push({ category: category1, totalSpent: sum });
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
