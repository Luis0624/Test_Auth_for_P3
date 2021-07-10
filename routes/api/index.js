const router = require("express").Router();
const userRoutes = require("./user");
console.log("apiRoutes")
// Post routes
router.use("/user", userRoutes);

module.exports = router;