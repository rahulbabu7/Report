var express = require("express");
var repModel = require("../modules/report");
var router = express.Router();
var report = repModel.find({});

/* GET users listing. 


router.get("/", function (req, res, next) {
  report.exec(function(err, data)  {
    if (err) throw(err);
    res.render("admin/viewReport",{ records: data })
  });
});


*/
/*
router.get("/", function (req, res, next) {
  res.render("admin/mainPage");
});

*/





/*

router.get("/", function (req, res, next) {
  
  report.exec()
   .then(data => {
      res.render("admin/viewReport", { record: data });
   })
   .catch(err => {
     next(err);
   });
});

*/

router.get("/", async function (req, res, next) {
  try {
    const data = await report;
    res.render("admin/viewReport", { record: data });
  } catch (err) {
    next(err);
  }
});


/*
router.get("/", function (req, res, next) {
  report
    .then(data => {
      res.render("admin/viewReport", { record: data });
    })
    .catch(err => {
      next(err);
    });
});

*/




module.exports = router;
