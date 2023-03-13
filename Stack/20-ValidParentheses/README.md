# Switch Case Solution
For each input char that open a parenthesis, the closing one is added to the stack. And for each closing one it compares with the last one added in the stack, if they're the same, it pops the element. If they're not, it adds a dot to flag the string as a invalid one.

```javascript
var stack = [];
for(let i = 0; i < s.length; i++) { // O(n)
    switch (s[i]) { // O(1)
        case '(':
            stack.push(')'); // O(1)
            break;
        case '[':
            stack.push(']'); // O(1)
            break;
        case '{':
            stack.push('}'); // O(1)
            break;
        case ')':
        case ']':
        case '}':
            if(stack.at(-1) == s[i])
                stack.pop(); // O(1)
            else stack.push('.') // flag as invalid (stack.length != 0)
            break;
    }
}
return stack.length === 0
```