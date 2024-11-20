import app from '../../server.js'



const runServer = ()=>{

    const port = process.env.PORT || 7878
    app.listen(port, ()=>{
        console.log(`server listning on port ${port}`)
    })

}


export default runServer