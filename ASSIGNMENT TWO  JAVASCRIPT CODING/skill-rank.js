const fs = require('fs');

// Read input from JSON file
const input = JSON.parse(fs.readFileSync('input.json'));

// Calculate ranks
const ranks = {};
for (const skill of Object.keys(input)) {
  const rank = Math.round(input[skill]['2019 score'] / 10);
  ranks[skill] = rank;
}

// Get rank for user input skill
const userInput = 'Climbing'`:
if (userInput in ranks) {
  console.log(`Rank of ${userInput}: ${ranks[userInput]}`);
} else {
  console.log(`${userInput} not found`);
}

