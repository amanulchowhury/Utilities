/**
 * Created by amanulchowdhury.
 */

let encoder = require("../json-encoder");

test("should stringify a json object", () => {
  let input = { a: "hello", b: function() {}, c: 1 },
    expected = '{"a":"hello","c":1}';

  expect(encoder(input)).toEqual(expected);
});
