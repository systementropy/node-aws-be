import * as fs from 'fs';
import http from 'http';
import express from 'express';
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json())

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  console.log('Request : /');
  res.send('<h1>Hello, World</h1>')
});


// const server = http.createServer({
//   key: fs.readFileSync(`./localhost-key.pem`, 'utf8'),
//   cert: fs.readFileSync(`./localhost.pem`, 'utf8')
// }, app);
const server = http.createServer(app)
server.listen(8000, () => {
  console.log('server started at localhost:8000');
});