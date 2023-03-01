const Engineer = require("../lib/Engineer");

test("Should create and return engineer as an object", () => {
  const engineer = new Engineer();
  expect(typeof engineer === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const engineer = new Engineer("Darren");
  expect(engineer.getName()).toBe("Darren");
});
test("Should grab id of engineer", () => {
  const engineer = new Engineer("Darren", 2);
  expect(engineer.getId()).toBe(2);
});
test("Should grab email of engineer", () => {
  const engineer = new Engineer("Darren", 2, "Darren@fakemail");
  expect(engineer.getEmail()).toBe("Darren@fakemail");
});
test('test to see if I can access getGithub()', () => {
    const engineer = new Engineer("Darren", 2, "Darren@fakemail", "Darrenmedrano");
    expect(engineer.getGithub()).toBe('Darrenmedrano');
});
