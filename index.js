import express from "express";
import mongoose from "mongoose";
import itemsRouter from './src/routes/items.js';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(itemsRouter);

mongoose.connect(process.env.MONGO_DB_CONNECTION).then(() => console.log("Connected mongo")).catch((err) => {console.log(err)});


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}`)
});