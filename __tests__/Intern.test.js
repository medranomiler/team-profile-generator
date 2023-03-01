const Intern = require("../lib/Intern");

test("Should create and return intern as an object", () => {
  const intern = new Intern();
  expect(typeof intern === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const intern = new Intern("Darren");
  expect(intern.getName()).toBe("Darren");
});
test("Should grab id of intern", () => {
  const intern = new Intern("Darren", 3);
  expect(intern.getId()).toBe(3);
});
test("Should grab email of intern", () => {
  const intern = new Intern("Darren", 3, "darren@email");
  expect(intern.getEmail()).toBe("darren@email");
});
test("Should grab school of intern", () => {
  const intern = new Intern("Darren", 3, "darren@email", "UTA-bootcamp");
  expect(intern.getSchool()).toBe("UTA-bootcamp");
});