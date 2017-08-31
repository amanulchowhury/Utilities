/*
We're making a new game, and levels are created randomly. But randomly
is not always good. We need to assess the levels. One way to do that
is to measure how "walkable" is a level. We can do this in our levels
because they are a very simple grid where a "1" represents a wall and
a "0" represents a walkable cell. The idea is to come up with a
function that can measure the size of all wakable pockets in a level.

For the purpose of this problem, a level can be thought of a 2D matrix
with ones and zeroes as explained before. Also, the player can only
move horizontally or vertically. For instance:

```
0 1 0
0 1 1
1 0 0
```

That level has three walkable pockets, of sizes 2, 2 and 1. So your
function should return the array `[2, 2, 1]` (can be in any order).

Another example:

```
[
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0]
]
```

That's only two walkable pockets, of sizes `[4, 2]`.
*/

const findPathSize = (vertices, i, j) => {
  let size = 1;

  // check bounds
  if (i < 0 || j < 0 || i >= vertices.length || j >= vertices.length) {
    return 0;
  }

  // size is zero if it is a wall
  if (vertices[i][j] !== 0) {
    return 0;
  }

  // mark as visited
  vertices[i][j] = 2;

  size +=
    findPathSize(vertices, i, j - 1) +
    findPathSize(vertices, i, j + 1) +
    findPathSize(vertices, i - 1, j) +
    findPathSize(vertices, i + 1, j);

  return size;
};

const findPaths = vertices => {
  let result = [];
  let n = vertices.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (vertices[i][j] !== 0) {
        continue;
      } else {
        // check right, left and down to find path
        result.push(findPathSize(vertices, i, j, n));
      }
    }
  }

  return result;
};

module.exports = findPaths;
