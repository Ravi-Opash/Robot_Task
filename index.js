let robot = [0, 0]

output=trackRobot(20, 30, 10, 40)(robot, "North");
console.log(output);

function trackRobot(...clock) {
    return function trackRobot(robot, direction) {

        let c = 4;
        // console.log(clock.length)

        let n = Math.floor(clock.length / 4)

        if(clock.length%4!=0){
            n=n+1;
        }

        for (let i = 0; i<n; i++) {

            for(let j=0; j<4; j++){
                if(isNaN(clock[j+3])){
                    clock[j+3]=0;
                }
            }

            if (direction == "West") {
                robot[0] += clock[i + 2] - clock[i];
                robot[1] += clock[i + 1] - clock[i + 3];
            }
            else if (direction == "East") {
                robot[0] += clock[i] - clock[i + 2];
                robot[1] += clock[i + 3] - clock[i + 1];
            }
            else if (direction == "South") {
                robot[0] += clock[i + 3] - clock[i + 1];
                robot[1] += clock[i + 2] - clock[i];
            }
            else {
                robot[0] += clock[i * c + 1] - clock[i * c + 3];
                robot[1] += clock[i * c] - clock[i * c + 2];
            }
        }
        return robot;
    }
}

