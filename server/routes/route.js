const express = require("express");
const router = express.Router();

const formcontroller = require("../controllers/formcontroller")



router.post('/createform', formcontroller.createForm);
router.put('/updateform/:formid',formcontroller.updateForm);


module.exports = router;