let debounce = require("../debounce");

jest.useFakeTimers();
describe("debounce a function", () => {
  it("should throw error if fn is not a function", () => {
    expect(() => {
      debounce("hello", 200)();
    }).toThrowError("fn needs to be a function");
  });

  it("should throw error if timeout is not a number", () => {
    expect(() => {
      let fn = jest.fn();
      debounce(fn, "hello")();
    }).toThrowError("timeout needs to be a number");
  });
  it("should run a funciton after specified delay", () => {
    let fn = jest.fn();

    debounce(fn, 200)();

    expect(fn).not.toBeCalled();

    // fast forward all timers
    jest.runAllTimers();

    expect(fn).toBeCalled();
  });

  it("should run the debounced function only once", () => {
    let fn = jest.fn();

    debounce(fn, 200)();

    expect(fn).not.toBeCalled();

    debounce(fn, 200)();

    // fast forward all timers
    jest.runAllTimers();

    expect(fn).toBeCalled();
    expect(fn.mock.calls.length).toBe(1);
  });
});
