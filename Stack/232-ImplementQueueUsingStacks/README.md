# One Array Solution

This solution user only one array to implement the FIFO (First-in First-out) queue. The push function is the same as the array one, the peek function returns the value at the start of the array, and the empty function returns a comparison between the length of the array and zero. The only unsual function here is the `this.arr.shift()`, which returns the first element of the array and pops it after.

Runtime and memory are a bit weird since that are exact same solutions with different results. But this are the numbers I got:\ 
Runtime: 61ms (beats 63.92%)\
Memory: 41.6 MB (beats 82.1%)\

```javascript
MyQueue.prototype.push = function(x) {
    this.arr.push(x);
};

MyQueue.prototype.pop = function() {
  return this.arr.shift();
};

MyQueue.prototype.peek = function() {
    return this.arr[0];
};

MyQueue.prototype.empty = function() {
    return this.arr.length === 0;
};
```