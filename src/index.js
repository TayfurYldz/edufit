const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
app.listen(3000, () => console.log('Server started on port 3000'))