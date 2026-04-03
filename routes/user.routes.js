const router = require("express").Router();
const ctrl = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

router.get("/", auth, role("admin"), ctrl.getUsers);
router.put("/:id/role", auth, role("admin"), ctrl.updateUserRole);
router.put("/:id/status", auth, role("admin"), ctrl.toggleStatus);

module.exports = router;