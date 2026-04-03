const router = require("express").Router();
const ctrl = require("../controllers/dashboard.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

router.get("/", auth, role("analyst", "admin"), ctrl.getDashboard);

module.exports = router;