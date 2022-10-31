class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element > parent) {
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
      } else if (element <= parent) {
        break;
      }
    }
    return this.values
  }

  insert(val) {
    this.values.push(val)
    let result = this.bubbleUp()
    return result
  }
}

let mbh = new MaxBinaryHeap()
console.log(mbh.insert(55))
