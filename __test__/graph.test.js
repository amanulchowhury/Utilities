/**
 * Created by amanulchowdhury.
 */

let graph = require("../graph");

test("should find duplicates", () => {
  let data = [
      { name: "jo", email: "mu23n@hotmail.com", phone: "5712260246", id: 1 },
      {
        name: "johanna1",
        email: "mu23n1@hotmail.com",
        phone: "5712232246",
        id: 5
      },
      {
        name: "munna",
        email: "mu23nster@hotmail.com",
        phone: "5712260220",
        id: 2
      },
      {
        name: "johanna1",
        email: "mu23n2@hotmail.com",
        phone: "5712232232",
        id: 6
      },
      {
        name: "amanul",
        email: "mu23n@hotmail.com",
        phone: "5712260220",
        id: 3
      },
      {
        name: "johanna",
        email: "mu23n@hotmail.com",
        phone: "5712261246",
        id: 4
      },
      {
        name: "johanna1",
        email: "mu23n3@hotmail.com",
        phone: "5712232232",
        id: 7
      }
    ],
    expected = {
      "1": [3, 2, 4],
      "5": [],
      "6": [7]
    };

  expect(graph(data)).toEqual(expected);
});
