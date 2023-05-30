var express = require('express');
var multer = require('multer');
var path = require("path");
var repModel = require('../modules/report')
var router = express.Router();
var report = repModel.find({});


router.use(express.static(path.join(__dirname, 'public')));

router.get("/", function (req, res, next) {
  res.render("user/mainPage");
});

//getting the report upload form
router.get("/upload", (req, res) => {
  res.render("user/upload");
});



/*
router.post("/upload",function(req,res,next){

  var reportDetails = new repModel({
     
    centreId:req.body.centreID,
    description :req.body.description,
    Rphoto:req.body.Rphoto,
    title:req.body.title,
    date:req.body.date,
    reportId:req.body.reportId
  });

  console.log(reportDetails)

  */



/*
  report.exec()
  .then(data => {
     res.render("admin/viewReport", { record: data });
  })
  .catch(err => {
    next(err);
  });
  
})*/

// var Storage = multer.diskStorage({
//   destination: "./public/uploads/" ,
//   filename:(req,file,cb)=>{
//     cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
//   }
   

// });

// var upload = multer({
//   storage:Storage
// }).single('Rphoto')

// router.post('/upload', upload,function (req, res, next) {
//   var success = req.file.filename+"upload"
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   var reportDetails = new repModel({
//     centreId: req.body.centreID,
//     description: req.body.description,
//     Rphoto: req.file.filename,
//     title: req.body.title,
//     date: req.body.date,
//     reportId: req.body.reportId
//   });
//   console.log(reportDetails)
  


//   reportDetails.save()
//   .then(() => {
//     res.send("Form submitted successfully");
//   })
//   .catch(err => {
//     throw err;
//   });

  
//})


/*
  router.post("/upload", function (req, res, next) {
    var reportDetails = new repModel({
      centreId: req.body.centreID,
      description: req.body.description,
      Rphoto: req.body.Rphoto,
      title: req.body.title,
      date: req.body.date,
      reportId: req.body.reportId
    });
   
    console.log(reportDetails.title)

    

    // Further processing of the form data
  reportDetails.save(function(err,res1){
   if(err) throw err;
  });
    // Send response to the client
   res.send("Form submitted successfully");
  });

  */



  var Storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
  });
  
  var upload = multer({
    storage: Storage
  }).array("Rphoto", 3);
  
  router.post('/upload', upload, function (req, res, next) {
    var success = req.files.map(file => file.filename + " upload");
  
    var reportDetails = new repModel({
      centreId: req.body.centreID,
      description: req.body.description,
      Rphoto: req.files.map(file => file.filename),
      title: req.body.title,
      date: req.body.date,
      reportId: req.body.reportId
    });
  
    console.log(reportDetails);
  
    reportDetails.save()
      .then(() => {
        res.send("Form submitted successfully");
      })
      .catch(err => {
        throw err;
      });
  });
  

module.exports = router;
