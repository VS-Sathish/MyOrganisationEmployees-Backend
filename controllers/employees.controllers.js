const Employees = require("../models/employees.models.js");

exports.gettingAllEmployees = (request, response) => {
  try {
    Employees.find((err, data) => {
      if (err) {
        return response
          .status(400)
          .send({ message: "Error while reteriving data" });
      }
      response.status(200).send(data);
    });
  } catch (error) {
    response.status(500).send({ message: "Internal server error" });
  }
};

exports.gettingAnEmployeeById = (request, response) => {
  try {
    Employees.findOne({ _id: request.params.empId }, (err, data) => {
      if (err) {
        return response
          .status(400)
          .send({ message: "Error while reteriving an employee" });
      }
      response.status(200).send(data);
    });
  } catch (error) {
    response.status(500).send({ message: "Internal server error" });
  }
};

exports.creatingNewEmployee = async (request, response) => {
  try {
    const payload = request.body;
    const newEmployee = new Employees(payload);
    await newEmployee.save((err, data) => {
      if (err) {
        return response
          .status(400)
          .send({ message: "Error while adding new employee" });
      }
      response.status(201).send({
        employeeId: data._id,
        messaage: "Employee added successfully",
      });
    });
  } catch (error) {
    response.status(500).send({
      message: "Internal server error",
    });
  }
};

exports.updatingAnEmployeeById = (request, response) => {
  try {
    Employees.findByIdAndUpdate(
      { _id: request.params.empID },
      { $set: request.body },
      (err, data) => {
        if (err) {
          return response
            .status(400)
            .send({ message: "Error while updating employee data" });
        }
        response.status(201).send({
          employeeID: data._id,
          message: "employee updated successfully",
        });
      }
    );
  } catch (error) {
    response.status(500).send({ message: "Inrernal server error" });
  }
};

exports.deletingAnEmployee = (request, response) => {
  try {
    Employees.deleteOne({ _id: request.params.empID }, (err, data) => {
      if (err) {
        return response
          .status(400)
          .send({ message: "error while deleting an employee" });
      }
      response.status(200).send({
        message: `employee with id ${request.params.empID} deleted successfully`,
      });
    });
  } catch (error) {
    response.status(500).send({ message: "Inrernal server error" });
  }
};
