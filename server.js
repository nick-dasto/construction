const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")

dotenv.config();

const app = express();

app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))