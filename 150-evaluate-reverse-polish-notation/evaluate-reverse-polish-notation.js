/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            stack.push(+stack.pop() + +stack.pop());
            continue;
        }
        if (tokens[i] === '-') {
            const right = stack.pop();
            stack.push(stack.pop() - right);
            continue;
        }
        if (tokens[i] === '*') {
            stack.push(stack.pop() * stack.pop());
            continue;
        }
        if (tokens[i] === '/') {
            const right = stack.pop();
            stack.push(Math.trunc(stack.pop() / right));
            continue;
        }
        stack.push(tokens[i]);
    }
    return stack.pop();
};