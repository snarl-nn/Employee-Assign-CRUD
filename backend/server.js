let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database'),
    bodyParser = require('body-parser')

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully');
}, error => {
    console.log('Cannot connect to database ' + error)
})

const employeeAPI = require('./routes/Employee.route');
const app = express();
const createError = require('http-errors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());


app.use('/api', employeeAPI);

const port = process.env.PORT || 4000;
const server = app.listen(port, () =>{
    console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
    next(createError(404))
})

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})