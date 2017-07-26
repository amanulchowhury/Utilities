/**
 * Created by amanulchowdhury.
 */

let bindThis = require("../bindThis");

test("it should call function with passed context", () => {
  let obj = { message: "I am the context" };

  function print() {
    return this.message;
  }

  let objPrinter = print.myBind(obj);

  expect(objPrinter()).toEqual(obj.message);
});
