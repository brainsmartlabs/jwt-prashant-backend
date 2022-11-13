const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { userRouter } = require('./routes/userRoutes');
const { dashboardRouter } = require('./routes/dashboardRoutes');


mongoose.connect('mongodb://0.0.0.0:27017/jwt').then(() => {
    app.listen(3300);
}).then(() => {
    console.log('DB connected & server started at 3300');
})

const app = express();
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/dashboard', dashboardRouter);

