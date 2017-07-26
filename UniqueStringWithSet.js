/**
 * Created by amanulchowdhury.
 */

const isUnique = str => {
  /*
	 * Return true/false if a string is unique or not.
	 * Uniqueness means all of the letters in the string are not repeated
	 */
  let uniqueSet = new Set();

  for (let i = 0; i < str.length; i++) {
    uniqueSet.add(str[i].toLowerCase());
  }

  return uniqueSet.size === str.length;
};

module.exports = isUnique;
