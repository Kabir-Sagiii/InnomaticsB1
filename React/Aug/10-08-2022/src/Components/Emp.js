import React from "react";

function Emp() {
  const [emp, setEmp] = React.useState({
    name: "Krishna",
    salary: 70000,
  });
  const updateEmp = () => {
    setEmp({
      name: "Sneha",
      salary: 90000,
    });
  };
  const previousEmp = () => {
    setEmp({
      name: "Krishna",
      salary: 70000,
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4>Employee Details</h4>
            </div>

            <div className="card-body">
              <dl>
                <dt>Employee Name</dt>
                <dd>{emp.name}</dd>
                <dt>Employee Salary</dt>
                <dd>{emp.salary}</dd>
              </dl>
              <button className="btn btn-success" onClick={updateEmp}>
                Update Employee
              </button>
              <button className="btn btn-success mx-3" onClick={previousEmp}>
                Previous Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emp;
