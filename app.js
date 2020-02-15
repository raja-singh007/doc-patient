const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


// import routes
const docRoute = require('./routes/doc_route');
const patientRoute = require('./routes/patient_route');
const hospitalRoute = require('./routes/hosp_route');

dotenv.config();

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
{useNewUrlParser: true,
useUnifiedTopology: true  },
() =>{
    console.log('connected to DB');
});

//Middleware
app.use(cors());
app.use(bodyParser.json());


//Route Middlewares
app.use('/api/doctor',docRoute);
app.use('/api/patient',patientRoute);
app.use('/api/hospital',hospitalRoute);




app.listen(3030,() => {console.log('listening to port 3030')});