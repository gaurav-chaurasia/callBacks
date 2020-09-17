var rect = require('./rectangle');

function solveRact(l, b) {
    console.log(`Solving Ract with length: ${l}, and breadth: ${b}`);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log(`ERROR: ${err.message}`);
        }
        else {
            console.log(`The perimeter is ${rectangle.perimeter()}`);
            console.log(`The area is ${rectangle.area()}`);
        }
    });
    console.log(`this statment is for checking!!!`);
}


solveRact(1, 3);
solveRact(2, 4);
solveRact(0, 3);
solveRact(1, -3);


