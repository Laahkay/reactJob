const mongoose = require('mongoose');

const Schemas = mongoose.Schema({
   Firstname:{
      type: String,
      require:true
   },
   
     date:{
      // type: Date,
      // default: Date
   },  
   leader:{
      type: String,
      require:true
   },
     members:{
      type: Number,
      require:true
   },
})
module.exports = mongoose.model('post',Schemas)