const time = process.argv.slice(2)

for (let element of time){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(element)*1000);
}