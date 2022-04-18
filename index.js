// import the robotjs library
var robot = require('robotjs');

function main() {
    console.log("Starting...");
    sleep(4000);

    robot.moveMouse(456, 404);
    robot.mouseClick();
    console.log("Done.");
    

}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();

// function main(position) {
//     console.log("Starting...");
//     robot.moveMouse(position, position);
//     console.log("Done.");

// }

// main(69)
// main(1420)




