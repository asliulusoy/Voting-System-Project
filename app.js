import express from 'express';
import dotenv from 'dotenv';
import conn from './database.js';
import cookieParser from 'cookie-parser';
import pageRoute from "./routes/pageRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

//db connection  
conn();


const app = express();
const PORT = process.env.PORT;

//ejs template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
//before login
app.use('/', pageRoute);
app.use('/HowtoVote', pageRoute); //before login voting page
app.use('/contact', pageRoute);
//after login
app.use('/users', userRoute);
app.use('/dashboard', pageRoute);
app.use('/profile', pageRoute);
app.use('/projects', pageRoute);
app.use('/voting', pageRoute); //after login voting page


  
app.listen(PORT, () => {
    console.log("Listening Port: " + PORT);
});