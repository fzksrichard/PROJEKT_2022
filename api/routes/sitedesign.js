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

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;  
  try {
      const sitedesign = query ? await SiteDesign.find().sort({ _id: -1 }).limit(5) : await SiteDesign.find();
      res.status(200).json(sitedesign);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//UPDATE: kellhet a projekthez is

module.exports = router;