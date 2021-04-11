const readline = require('readline'); // requiring readline

readline.emitKeypressEvents(process.stdin); // enabling reading of commandline
process.stdin.setRawMode(true);

console.log("Press 'b' to hear my alarm, then press any number from 1-9 to set a time for that many seconds. Use CTRL + C to exit!");

process.stdin.on('keypress', (str, key) => {
  if (!key.ctrl && key.name === 'b') {
    process.stdout.write('\x07');
  }

  if (!key.ctrl) {
    let keyPressed = parseInt(key.name);

    if (!isNaN(keyPressed)) {
      if (keyPressed >= 1 && keyPressed <= 9) {
        console.log(`setting timer for ${keyPressed} seconds...`);
        setTimeout(() => {
          process.stdout.write('\x07');
        }, 1000 * keyPressed);
      }
    }
  }

  if (key.ctrl && key.name === 'c') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});