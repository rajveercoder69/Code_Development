const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
connectToMongo();
const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());



app.use('/api/auth', require('./routes/auth'));
app.use('/api/dataa', require('./routes/dataa'));

app.listen(port, () => {
    console.log(`listening on port: http://localhost:${port}`);
})