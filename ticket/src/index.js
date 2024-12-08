require('dotenv').config();
const express = require('express')
require('express-async-errors')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const { createTicketRouter } = require('./routes/create');
const { allTicketRouter } = require('./routes/getTicket');

const app = express()
app.set('trust proxy', true);
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieSession({
    signed: false,
    secure: false
}))

app.use(createTicketRouter);
app.use(allTicketRouter)

app.all('*', async () => {
    throw new Error("Not Found Page.");
})

app.use(errorHandler);

const startApp = async () => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT token required")
    }

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL required")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected to db');
    } catch (error) {
        console.log('Not connected to db');
    }

    app.listen(4001, () => {
        console.log('app is running 4001');
    })
}

startApp();
