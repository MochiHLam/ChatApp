require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./lib/db');
const indexRouter = require('./routers/index');

// Load models (registers schemas with Mongoose; collections created on first insert)
require('./models/User');
require('./models/Chat');
require('./models/Message');
require('./models/Post');
require('./models/Comment');
require('./models/VideoCall');
require('./models/Notification');

connectDB();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'ChatApp API is running' }));
app.use('/api', indexRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
