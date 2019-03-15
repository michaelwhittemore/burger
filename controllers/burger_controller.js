const express = require("express");
const burger = require("../models/burger");
const router = express.Router()
//TODO--define router

router.get("/", function (req, res) {
    burger.all(function (data) {
        //console.log(data);
        res.render("index", { burgers: data })
    })
});

router.post("/api/addburger/:burgerName",function (req,res){
    burger.add(req.params.burgerName)
})
router.post("/api/eatburger/:burgerName",function (req,res){
    burger.update(req.params.burgerName)
})
router.get("*", function (req, res) {
    res.render("404");
});

// }

module.exports = router
