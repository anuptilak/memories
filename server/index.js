import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin: *");;
    res.header('Access-Control-Allow-Headers','*');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/posts', postRoutes);
const CONNECTION_URL = "mongodb+srv://anuptilakmongodb:dqvMQeRxoHAFwQru@cluster0.azl0wpw.mongodb.net/";
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.massage));

