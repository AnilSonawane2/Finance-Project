const router = require("express").Router();
const ctrl = require("../controllers/record.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { recordValidation } = require("../utils/validators");
const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post("/", auth, role("admin"), recordValidation, validate, ctrl.createRecord);
router.get("/", auth, ctrl.getRecords);
router.put("/:id", auth, role("admin"), recordValidation, validate, ctrl.updateRecord);
router.delete("/:id", auth, role("admin"), ctrl.deleteRecord);

module.exports = router;