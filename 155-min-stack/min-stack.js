
var MinStack = function() {
    this.value = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = this.value.at(-1)?.min;
    if (min === undefined || val < min) {
        min = val;
    }
    this.value.push({
        val,
        min,
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.value.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.value.at(-1).val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.value.at(-1).min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */