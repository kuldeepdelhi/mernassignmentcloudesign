const express = require("express");
const app = express();
const mongoose= require('mongoose')
const route = require('./routes/route')
var bodyParser = require('body-Parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/formDataBase?retryWrites=true&w=majority")
.then(()=> console.log(`mongodb running at ${new Date()}...`))
.catch(err => console.log(err))



app.use("/",route)

app.listen(process.env.PORT || 3000, function() {
    console.log('Express is running on PORT'+ (process.env.PORT || 3000 ))
})