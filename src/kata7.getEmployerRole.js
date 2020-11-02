const getEmployerRole = (employeeName, employees) => {

    let response = employees.filter(employee => employee.name === employeeName);
    return response[0].role;
       

  };

    

module.exports = getEmployerRole;


