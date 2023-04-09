import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js"


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
//const CONNECTION_STRING = 'mongodb+srv://x1aom3ng:mongodbpassword@cluster0.6qkpu53.mongodb.net/tuiter?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);
//
const app = express()
app.use(cors())
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json())
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)