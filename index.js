const express = require('express');
const cors = require('cors');
const otpRoute = require('./routes/verificationRoute');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();
app.get('/',(req,res) => {
    res.send('HEllo');
})

app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/otp', otpRoute);


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
