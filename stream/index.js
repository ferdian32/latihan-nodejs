const fs = require("fs");

const readableStream = fs.createReadStream("./stream/input.txt", {
  highWaterMark: 15,
});
readableStream.setEncoding("utf-8");
const writeable = fs.createWriteStream("./stream/output.txt");

readableStream.on("readable", () => {
  let chunk;
  while ((chunk = readableStream.read()) !== null) {
    process.stdout.write(`[${chunk}]\n`);
    writeable.write(chunk);
  }
});

readableStream.on("end", () => {
  console.log("end");
});
