const SiteDesign = require("../models/SiteDesign");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

router.post("/", async (req, res)=>{
    const newSiteDesign=new SiteDesign(req.body);
    try {
        const savedSiteDesign=await newSiteDesign.save();
        res.status(200).json(savedSiteDesign);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE: kellhet a projekthez is

module.exports = router;