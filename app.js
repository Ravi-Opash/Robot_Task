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