const express = require('express');
const PORT = 3000;
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

require('./db');
require('./models/eventOrg');

const authRouter = require('./routes/autheventOrg');
const requiredToken = require('./middleware/authTokenRequired');

app.use(authRouter); // Correct the usage here

app.get('/', requiredToken, (req, res) => {
    res.send(req.user);
});

// signup
app.post('/login', async (req, res) => {
    console.log(req.body);
    res.send('This is the signup Page');
});   

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
