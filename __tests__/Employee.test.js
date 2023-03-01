const Employee = require("../lib/Employee");

test("Should create and return employee as an object", () => {
  const employee = new Employee();
  expect(employee && typeof employee === "object").toBe(true);
});

describe("Employee", () => {
  describe("getName", () => {
    it("should grab employee name", () => {
      const employee = new Employee("Darren", 1, "darren@email");
      expect(employee.getName()).toBe("Darren");
    });
  });
  describe("getId", () => {
    it("should grab employee Id", () => {
      const employee = new Employee("Darren", 1, "darren@email");
      expect(employee.getId()).toBe(1);
    });
  });
  describe("getEmail", () => {
    it("should grab employee Email", () => {
      const employee = new Employee("Darren", 1, "darren@email");
      expect(employee.getEmail()).toBe("darren@email");
    });
  });
  describe("getRole", () => {
    it("should grab getRole()", () => {
      const employee = new Employee("Darren", 1, "darren@email");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});