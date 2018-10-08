const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/name',{useNewUrlParser:true})

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
 console.log('connected sucessful!')
})

module.exports = db










