//inport packages
const express=require('express')    
const morgan=require('morgan')
//configure our port
//check if it's set in enviro variable ifnot we gonna default it to 3000
const port=process.env.PORT||3000
//create an instance of express application
const app=express()
//log all request
app.use(morgan('common'))
//get/
app.get('/',(req,resp)=>{
    //what is the media type return the html content
    resp.type('text/html')
    resp.status(200)
    resp.send(`<h1>The time is now ${new Date()}</h1>`)
})
//start our sever
app.listen(port,()=>{
    console.info(`Start application on port ${port} at $ {new Date()}`)
} )

console.info(`port=${port}`)