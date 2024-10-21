const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5468


app.use(bodyParser.json());





app.listen(port,()=>{
    console.log(`server listining over the port ${port}`);
})