const {Photos} = require("../config/db");
const express = require("express")
const router = express.Router()
const multer  = require('multer')
const upload = require("../middleware/photoupload")
const path = require("path")



router.post("/addphotos",upload.single("p_image"),(req, res)=>{
    console.log(req.body)
    data = {
        p_name: req.body.p_name,
        p_image:req.file.path
    }
    Photos.create(data).then(photos => {
        res.send(photos);
    }).catch(err => {
        res.send(err);
    })
})

router.post("/multiple", upload.array("images", 3), (req, res) => {
    console.log(req.file);
    res.send("data posted");
    // data = {
    //     p_name: req.body.p_name,
    //     p_image:req.file.path
    // }
    // Photos.create(data).then(photos => {
    //     res.send(photos);
    // }).catch(err => {
    //     res.send(err);
    // })
})

router.get("/photos", (req, res) =>{
    Photos.findAll({

    }).then(Photos => {
        res.send(Photos);
    }
    ).catch(err => {
        res.send(err);
    }
    );
})

module.exports = router