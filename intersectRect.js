/**
 * Created by amanulchowdhury.
 */

/**
 * Find if two rectangles intersect
 * @param r1 [ [x1, y1], [x2, y2] , [x3, y3], [x4, y4] ]
 * @param r2 [ [x1, y1], [x2, y2] , [x3, y3], [x4, y4] ]
 * @returns Boolean
 */
const intersectRect = (r1, r2) => {
  //return ! of intersection not possible
  return !(
    r2[0][0] > r1[2][0] || //r2.left > r1.right
    r2[1][1] > r1[3][1] || //r2.top > r1.bottom
    r2[2][0] < r1[0][0] || //r2.right < r1.left
    r2[3][1] < r1[0][1]
  ); //r2.bottom < r1.top
};
