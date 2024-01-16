
const express = require ("express");
const router = express.Router();

const EmployeeController = require('../controller/EmployeeController');

router.get('/getemployee',EmployeeController.getemployee);
router.get('/getemploye/:id',EmployeeController.getemployeeId);
router.post('/postemployee',EmployeeController.postemployee);
router.put('/updateemploy/:id',EmployeeController.updateemployee);
router.delete('/deleteemployee/:id',EmployeeController.deleteemployee);

module.exports = router;