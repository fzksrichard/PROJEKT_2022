const router=require("express").Router();
const stripe=require("stripe")("sk_test_51Lr3ZlEa2OAIXAPwMPVI9RJfPuZD9D0oYISmy3H9WiiDCYmvOGceydeHLtQQIu8VUm12ZUmnM2zKLhxM3dylFqcU00UTJBDppx");

router.post("/payment", (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  });
  
  module.exports = router;