/**
 * Server hit counter
 * It has two methods getHits and hit
 * hit tracks all hits for last 5 minutes and
 * getHits returns only the hits for last five minutes
 */

class ServerHits {
  constructor(max) {
    this.DEFAULT_MAX = 5000;
    this.MAX = max || this.DEFAULT_MAX;
    this.counter = new Array(this.MAX).fill(0);
    this.hitStart = new Date().valueOf();
  }

  hit() {
    let currentTime = new Date().valueOf();
    if (currentTime - this.hitStart > this.MAX) {
      let endIndex = (currentTime - this.hitStart) % this.MAX;

      for (let i = 0; i <= endIndex; i++) {
        this.counter[i] = 0;
      }

      this.hitStart = new Date().valueOf();
    }

    this.counter[(currentTime - this.hitStart) % this.MAX]++;
  }

  getHits() {
    let currentTime = new Date().valueOf();
    let startIndex = (currentTime - this.hitStart) % this.MAX;
    let count = 0;

    for (let i = startIndex; i < this.counter.length; i++) {
      count += this.counter[i];
    }

    return count;
  }
}

module.exports = ServerHits;
