const extractAudio = require("./extractAudio.js");
const path = require("path");
const fs = require("fs");

const INPUT_FOLDER = 'data/input';
const OUTPUT_FOLDER = 'data/output';

fs.readdir(INPUT_FOLDER, (err, files) => {
  if (err) {
    console.log("Error reading input folder: ", err);
    return;
  };

  files.forEach((file) => {
    const inputFilePath = path.join(INPUT_FOLDER, file);
    const outputFilePath = path.join(OUTPUT_FOLDER, `${path.parse(file).name}.mp3`);

    console.log(`Starting ${file} extraction...`);
    extractAudio(inputFilePath, outputFilePath);
  });
});
