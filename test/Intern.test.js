const Intern = require("../lib/Intern");

test("Set school with constructor", function () {
  const testValue = "Case Western Reserve University";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", function () {
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Get school with getSchool()", function () {
  const testValue = "Case Western Reserve University";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});