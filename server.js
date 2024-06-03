
// // server Instantiate
// const express = require('express');
// const app = express();


// // used to parse req.body in express -> pur or post
// const bodyParser = require('body-parser');
// // specifically parse json data and add it to the request.body object 
// app.use(bodyParser.json());

// // activate the server on 3000 port
// app.listen(3000, () => {
//     console.log("server started at port no 3000")
// });
// // node server.js in terminal




// //Routes

// // get request
// app.get('/', (request,response) =>{
//     response.send("hello");
// })

// // post request
// app.post('/api/cars', (request, response) => {
//     const { name, brand } = request.body;
//     console.log(name);
//     console.log(brand);
//     response.send("car submitted successfully.");
// })


// // mangoose
// const mangoose = require("mongoose");
// mangoose.connect('mongodb://localhost:27017/myDatabase',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {console.log("connection successful")})
// .catch((error) =>{console.log("received an error")});