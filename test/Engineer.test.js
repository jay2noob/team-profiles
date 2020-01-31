const Engineer = require("../lib/Engineer");

test("Set GitHUb username with constructor", function () {
  const testValue = "User";
  const e = new Engineer("Jay", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", function () {
  const testValue = "Engineer";
  const e = new Engineer("Jay", 1, "test@test.com", "User");
  expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username with getGithub()", function () {
  const testValue = "GitHubUser";
  const e = new Engineer("Jay", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});