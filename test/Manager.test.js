const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number with constructor", function () {
  const testValue = 100;
  const e = new Manager("Joe", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() returns \"Manager\"", function () {
  const testValue = "Manager";
  const e = new Manager("Joe", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Get office number with getOffice()", function () {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});