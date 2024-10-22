const app = require('./app')
require('dotenv').config();


const port = process.env.PORT || 5468



app.listen(port,()=>{
    console.log(`server listining over the port ${port}`);
})