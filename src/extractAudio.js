const ffmpeg = require("fluent-ffmpeg");

function extractAudio(inputFilePath, outputFilePath) {
  ffmpeg(inputFilePath)
    .output(outputFilePath)
    .noVideo()
    .audioCodec("libmp3lame")
    .on("end", () => {
      console.log("Audio extraction complete!");
    })
    .on("error", (err) => {
      console.log("Error extracting audio: ", err);
    })
    .run();
};

module.exports = extractAudio;
