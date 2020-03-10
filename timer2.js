const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
 if (key === 'b'){
    process.stdout.write('\x07')
  }
  else if (Number(key) >= 1 && Number(key) <= 9) {
    console.log(`Setting timer for ${key} secondd...`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key)*1000);
  }
  else if (key === '\u0003') {
    process.exit();
  }
});

