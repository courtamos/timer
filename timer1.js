const times = process.argv.slice(2); // takes args from command line

const timer = function(times) {
  for (const time of times) { // loops over times array
    if (time === undefined) { // if time is undefined skip, & continue loop
      continue;
    }
  
    if (isNaN(time)) { // if time is NaN skip, & continue loop
      continue;
    }
  
    if (time < 0) { // if time < 0, skip & continue loop
      continue;
    }

    setTimeout(() => {  // setTimeout that will beep at each valid time (in secs)
      process.stdout.write('\x07');
    }, 1000 * time);
  }
};

timer(times);