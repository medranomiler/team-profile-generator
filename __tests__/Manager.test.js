const Manager = require("../lib/manager");

test("Should create and return manager as an object", () => {
  const manager = new Manager();
  expect(typeof manager === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const manager = new Manager("Darren");
  expect(manager.getName()).toBe("Darren");
});
test("Should grab id of manager", () => {
  const manager = new Manager("Darren", 3);
  expect(manager.getId()).toBe(3);
});
test("Should grab email of manager", () => {
  const manager = new Manager("Darren", 3, "darren@email");
  expect(manager.getEmail()).toBe("darren@email");
});
test("Should grab office number of manager", () => {
  const manager = new Manager("Darren", 3, "darren@email", 1);
  expect(manager.getOfficeNumber()).toBe(1);
});