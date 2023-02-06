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
    Employees.find({ _id: request.params.empId }, (err, data) => {
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
  const payload = request.body;

  const newEmployee = new Employees(payload);

  await newEmployee.save((err, data) => {
    try {
      if (err) {
        return response
          .status(400)
          .send({ message: "Error while adding new employee" });
      }
      response.status(200).send({
        EmployeeId: data._id,
        message: "new employee added successfully",
      });
    } catch (error) {
      response.status(500).send({ message: "Inrernal server error" });
    }
  });
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
          EmployeeId: data._id,
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
  } catch {
    response.status(500).send({ message: "Inrernal server error" });
  }
};
