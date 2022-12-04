const SiteDesign = require("../models/SiteDesign");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const newSiteDesign = new SiteDesign(req.body);
  try {
    const savedSiteDesign = await newSiteDesign.save();
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

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await SiteDesign.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;