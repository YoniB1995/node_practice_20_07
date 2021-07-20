const http = require('http')
const fs = require('fs')
// const express = require('express')
const port = 8000

// http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/json'})
//     // response.end("Yoni Bitew")


//     fs.readFile('students.json',(err,content)=>{
//         response.write(content)
//         response.end()
//     })
// }).listen(port)

// console.log("server is running at http://localhost:8000/")

// const app = express();

// app.get('/yoni',(req,res)=>{
//     res.send('Dani World')
// })

// app.listen(8000,()=>{
//     console.log('Example App Listening on port 8000!')
// });



// app.get('/daniel',(req,res)=>{
//     res.send("Hello my name is yoni")
// })

// app.listen('8070',()=>{
//     console.log("Updating new Server data.")
// })



const express = require('express')
const app = express();

app.get('/YoniTest',(req,res)=>{
    res.send("This is test practice")
}).listen('8000',()=>{
    console.log('updating new data system.')
})