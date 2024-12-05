const express = require('express')
const bodyParser = require('body-parser')
const { currentUserRouter } = require('./routes/current-user')
const { signinUserRouter } = require('./routes/signin')
const { signoutUserRouter } = require('./routes/signout')
const { signupUserRouter } = require('./routes/signup')
const { errorHandler } = require('./middleware/errorHandler')

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signoutUserRouter);
app.use(signupUserRouter);

app.use(errorHandler);
// app.use();

app.listen(3000, () => {
    console.log('app is running 3000');
})
