const fs = require('fs');

// Read input from JSON file
const input = JSON.parse(fs.readFileSync('input.json'));

// Calculate ranks
const ranks = [];
for (const skill of Object.keys(input)) {
  const rank = Math.round(input[skill]['2019 score'] / 10);
  ranks.push({ skill, rank });
}

// Sort ranks in descending order
ranks.sort((a, b) => b.rank - a.rank);

// Identify top-3, bottom-3, top-3 accelerating, and top-3 decelerating capabilities
const top3 = ranks.slice(0, 3);
const bottom3 = ranks.slice(-3);
const accelerating = ranks.sort((a, b) => b['2024 score'] - a['2024 score']).slice(0, 3);
const decelerating = ranks.sort((a, b) => a['2024 score'] - b['2024 score']).slice(0, 3);

console.log('Ranks:', ranks);
console.log('Top-3:', top3);
console.log('Bottom-3:', bottom3);
console.log('Accelerating:', accelerating);
console.log('Decelerating:', decelerating);
