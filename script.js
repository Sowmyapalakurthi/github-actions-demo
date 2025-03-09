// Import the figlet library
const figlet = require('figlet');

// Use figlet to generate ASCII art
figlet('Hello World!', function(err, data) {
    if (err) {
        console.log('Something went wrong...may be');
        console.dir(err);
        return;
    }
    console.log(data,"added new yml file");
});
