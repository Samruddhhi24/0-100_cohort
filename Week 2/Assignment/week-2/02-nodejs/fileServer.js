/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const port = 3002;
const directoryPath = "./files/";

app.get("/files", function(req, res) {
  fs.readdir(directoryPath, function(err, files) {
    if (err) {
      // console.error(`Error listing files in directory : ${directoryPath}`);
      res.status(500).send(`Error listing files in directory `);
    } else {
      // console.log(`Files: ${files}`);
      res.status(200).json({"files": files});
    }
  });
});
app.get("/file/:filename", function(req, res) {
  const filename = req.params.filename;
  //console.log(`File name: ${filename}`);
  const filePath = path.join(directoryPath, filename);
  fs.readFile(filePath, "utf-8", function(err, data) {
    if (err) {
      // console.error(`Error reading the file: ${filePath}`);
      res.status(404).send("File not found");
    } else {
      // console.log(`File read successfully: ${filePath}`);
      res.status(200).send(data);
    }
  });
});

app.all("*", function(req, res) {
  // console.error("Invalid route has been hit");
  res.status(404).send("Route not found");
})

app.listen(port);

module.exports = app;