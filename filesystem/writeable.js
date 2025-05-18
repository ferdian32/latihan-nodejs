const fs = require("fs");

const writeable = fs.createWriteStream("./filesystem/todo.txt");

writeable.write("1.Belajar next js \n");
writeable.write("2.Belajar php \n");
writeable.write("3.Belajar Nest JS \n");

writeable.end("Akhir dari writeable stream");
