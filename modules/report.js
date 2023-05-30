var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/report',{useNewUrlParser:true}).then(()=>{
    console.log("successful")
}).catch(()=>{
    console.log("not successful")
});

var conn = mongoose.connection;

var reportSchema = new mongoose.Schema({
    centreId :Number,
    description :String,
    Rphoto: [String],
    title:String,
    date: { type: Date, default: Date.now },
    reportId: { type: Number, required: true, unique: true }
});

var reportModel = mongoose.model('Report',reportSchema);

module.exports = reportModel;