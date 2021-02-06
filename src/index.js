import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import GRouter from '../routes/guest.js';
import SRouter from '../routes/staff.js';
import ARouter from '../routes/analytics.js';
import RLRouter from '../routes/authentication.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const partialPath = path.join(__dirname, "../templates/partials");
const templatePath = path.join(__dirname, "../templates/view");
const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.ryzxn.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`)))
.catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
app.set("view engine", "ejs");
app.set("views", templatePath);

app.use('/guest', GRouter);
app.use('/staff', SRouter);
app.use('/analytics', ARouter);
app.use('/authentication', RLRouter);

app.use('/', (req, res) => {
    res.send('hello main');
});

