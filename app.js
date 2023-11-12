import express from 'express';
import dotenv from 'dotenv';
import conn from './database.js';
import cookieParser from 'cookie-parser';
import pageRoute from "./routes/pageRoute.js";
import lessonRoute from "./routes/lessonRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

//db connection  
conn();

const app = express();
const PORT = 3000;

//ejs template engine
//app.set('view engine', 'ejs');

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use('/', pageRoute);
//app.use('/lessons', lessonRoute);
//app.use('/users', userRoute);


app.listen(PORT, () => {
    console.log("Listening Port: " + PORT);
});