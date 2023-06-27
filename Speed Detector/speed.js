function checkSpeed(speed) {
    // Constants for speed limit, maximum demerit points, and demerit point increment
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    // Calculate demerit points by subtracting speed limit from speed and dividing by increment
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
    if (speed < speedLimit) {
      // If speed is below the speedlimit, return "Ok"
      return "Ok";
    } else if (demeritPoints > maxDemeritPoints) {
      // If demerit points exceed the maximum points, return "License suspended"
      return "License suspended";
    } else {
      // Otherwise, return the calculated demerit points
      return `Points: ${demeritPoints}`;
    }
  }
  
  console.log(checkSpeed(80));
  
