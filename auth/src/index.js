require('dotenv').config();
const express = require('express')
require('express-async-errors')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const { currentUserRouter } = require('./routes/current-user')
const { signinUserRouter } = require('./routes/signin')
const { signoutUserRouter } = require('./routes/signout')
const { signupUserRouter } = require('./routes/signup')
const { errorHandler } = require('./middleware/errorHandler')

const app = express()
app.set('trust proxy', true);
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieSession({
    signed: false,
    secure: false
}))

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signoutUserRouter);
app.use(signupUserRouter);

app.all('*', async () => {
    throw new Error("Not Found Page.");
})

app.use(errorHandler);

const startApp = async () => {
    if(!process.env.JWT_SECRET) {
        throw new Error("JWT token required")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected to db');
    } catch (error) {
        console.log('Not connected to db');
    }

    app.listen(3000, () => {
        console.log('app is running 3000');
    })
}

startApp();
