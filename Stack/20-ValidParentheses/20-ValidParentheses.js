/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    for(let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            case ')':
            case ']':
            case '}':
                if(stack.at(-1) == s[i])
                    stack.pop();
                else stack.push('.')
                break;
        }
    }
    return stack.length === 0
};
