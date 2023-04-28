const clone = require('./clone');
const knife = require('./knife');
const json = require('./json');
const combine = require('./combine');
const aggregate = require('./aggregate');

// Clone repos
console.log("Cloning...")
clone();

// Convert to knifeSV files
console.log("Knifing...")
knife();

// Convert to JSON files
console.log("Converting to JSON...")
json();

// Combine Output files
console.log("Combining...")
combine();

// Aggregate by week
console.log("Aggregating...")
aggregate();