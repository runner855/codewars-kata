const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const  employees = [
    {
      name: "David",
      role: "Software Engineer"
    },

     {
      name: "John",
      role: "Project Manager"
    }
  ];

    
    expect(getEmployerRole("David", employees)).toEqual('Software Engineer');
    expect(getEmployerRole("John", employees)).toEqual('Project Manager');

  });
});
