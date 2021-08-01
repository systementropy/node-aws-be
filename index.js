import * as fs from 'fs';
import http from 'http';
import express from 'express';
import bodyParser from "body-parser";
import Mongoose from 'mongoose';
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
  console.log('Request : /');
  res.send('<h1>Hello, World</h1>');
});


app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);



Mongoose.connect(process.env.DB_CONNECTION, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => err ? console.log(err) : console.log('Connected to database'));

// const server = http.createServer({
//   key: fs.readFileSync(`./localhost-key.pem`, 'utf8'),
//   cert: fs.readFileSync(`./localhost.pem`, 'utf8')
// }, app);
const server = http.createServer(app)
server.listen(8000, () => {
  console.log('server started at localhost:8000');
});