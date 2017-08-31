const findPaths = require("../findPaths");

describe("Find Path in 2D Matrix", () => {
  it("should return 3 walkable paths with sizes 2, 1 and 2", () => {
    const matrix = [[0, 1, 0], [0, 1, 1], [1, 0, 0]];
    const expectedPaths = [2, 1, 2];

    expect(findPaths(matrix)).toEqual(expectedPaths);
  });

  it("should return 1 walkable path with size 7", () => {
    const matrix = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    const expectedPaths = [8];

    expect(findPaths(matrix)).toEqual(expectedPaths);
  });
});
