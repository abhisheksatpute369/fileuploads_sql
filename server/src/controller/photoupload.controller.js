const {Photos} = require("../config/db");
const express = require("express")
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


router.post("/addphotos",upload.single('p_image'),(req, res)=>{
    data = {
        p_name: req.body.p_name,
        p_image:req.file.path
    }
    console.log("data ====" + req.file.path)
    Photos.create(data).then(photos => {
        res.send(photos);
    }).catch(err => {
        res.send(err);
    })
})

module.exports = router