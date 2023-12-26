import express from 'express';
import dotenv from 'dotenv';
import conn from './database.js';
import cookieParser from 'cookie-parser';
import pageRoute from "./routes/pageRoute.js";
import userRoute from "./routes/userRoute.js";
import { checkUser } from './middleware/auth.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.get("*", checkUser);
//before login
app.use('/', pageRoute);
//after login
app.use('/users', userRoute);
app.use('/results', userRoute);

 
app.listen(PORT, () => {
    console.log("Listening Port: " + PORT);
});