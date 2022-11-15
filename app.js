require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const serveStatic = require('serve-static');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(fileUpload());
// app.use(express.static('uploads'));
app.use('/uploads', express.static(`${__dirname}/uploads/`));

//Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => {
        console.log("Database connected")
    },
    error => {
        console.log("Database could't be connected to: " + error)
    })


//create port
const port = process.env.PORT || 2700;

app.use("/api/postAPI", require("./routes/post.route"))
app.use("/api/masterAPI", require("./routes/master.route"))
app.use("/api/statusChangeAPI", require("./routes/statusChange.route"))

// const postAPI = require('../backend/routes/post.route')
// const masterAPI = require('../backend/routes/master.route')




// app.use('/', serveStatic(path.join(__dirname, '/dist')))
// app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname + '/dist/index.html'));
//     })
//error hanler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'));
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    })
} else {
    app.use(express.static(__dirname + '/dist/'));
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    })
}

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})