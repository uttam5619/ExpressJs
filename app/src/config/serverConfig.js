import {app} from "../../server.js";


const runServer = () => {
    const port = process.env.PORT || 4521
    app.listen(port, ()=>{
        console.log(`server is listning on port ${port}`)
    })
}

export default runServer