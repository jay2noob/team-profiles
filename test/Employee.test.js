const Employee = require("../lib/Employee");

test("Instantiate instance of Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Set name using constructor", function () {
  const name = "Sam";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set id using constructor", function () {
  const testValue = 100;
  const e = new Employee("Bar", testValue);
  expect(e.id).toBe(testValue);
});

test("Set email using constructor", function () {
  const testValue = "test@test.com";
  const e = new Employee("Bar", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Get name with getName()", function () {
  const testValue = "Sam";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", function () {
  const testValue = 100;
  const e = new Employee("Bar", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get email with getEmail()", function () {
  const testValue = "test@test.com";
  const e = new Employee("Bar", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", function () {
  const testValue = "Employee";
  const e = new Employee("Sam", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});