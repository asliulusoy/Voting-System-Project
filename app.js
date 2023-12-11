import express from 'express';
import dotenv from 'dotenv';
import conn from './database.js';
import cookieParser from 'cookie-parser';
import pageRoute from "./routes/pageRoute.js";
import userRoute from "./routes/userRoute.js";
//import path from 'path';
//import url from 'url';
dotenv.config();

//db connection  
conn();
//for html->css
//const __filename = url.fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
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
app.use('/', pageRoute);
app.use('/dashboard', pageRoute);
app.use('/users', userRoute);
app.use('/projects', pageRoute);
app.use('/contact', pageRoute);

  
app.listen(PORT, () => {
    console.log("Listening Port: " + PORT);
});