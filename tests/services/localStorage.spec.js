const LocalStorage = require("../__mocks__/localStorageMock");
global.localStorage = new LocalStorage();

describe("localstorage", () => {
  beforeEach(() => {
    localStorage.setItem("jwt", "value");
    localStorage.setItem("user_id", 1);
  });

  afterEach(() => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
  });

  it("gets the user_id from localStorage", () => {
    expect(localStorage.getItem("user_id")).toBe("1");
  });

  it("gets the jwt from localStorage", () => {
    expect(localStorage.jwt).toBe("value");
  });
});
