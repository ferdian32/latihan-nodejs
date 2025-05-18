const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

// const data = fs.readFileSync('./filesystem/notes.txt','UTF-8');
// console.log(data);

fs.readFile("./filesystem/notes.txt", "UTF-8", fileReadCallback);
