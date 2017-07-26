let merge = (left, right) => {
  let il = 0,
    ir = 0;

  while (il < ir) {
    let temp = left[il];
    left = right[ir];
    right[ir] = temp;
    il++;
    ir--;
  }

  return right.concat(left);
};

let reverse = str => {
  if (str.length === 1) {
    return str;
  }

  let arr = str.split("");
  let middle = Math.floor(str.length / 2);
  let left = arr.slice(0, middle).join("");
  let right = arr.slice(middle).join("");

  return merge(reverse(left), reverse(right));
};
