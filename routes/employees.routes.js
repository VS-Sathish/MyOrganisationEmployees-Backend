const express = require("express");
const {
  gettingAllEmployees,
  gettingAnEmployeeById,
  creatingNewEmployee,
  updatingAnEmployeeById,
  deletingAnEmployee,
} = require("../controllers/employees.controllers.js");
const router = express.Router();

router.get("/employees", gettingAllEmployees);

router.get("/employees/:empId", gettingAnEmployeeById);

router.post("/employees", creatingNewEmployee);

router.put("/employees/:empID", updatingAnEmployeeById);

router.delete("/employees/:empID", deletingAnEmployee);

module.exports = router;
