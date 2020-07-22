// Question 2

// A string S consisting of N characters is considered to be properly nested if any
// of the following conditions is true:
// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a
// properly nested string;
// S has the form "VW" where V and W are properly nested
// strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.
// Write a function:
// that, given a string S consisting of N characters, returns 1 if S is properly
// nested and 0 otherwise.

const isProperlyNested = s => {
    const leftBraces = '{[(';
    const rightBraces = ')]}';
    let result = 1;
    const bracesStore = [];
    for (let i = 0; i < s.length; i++) {
        if (rightBraces.includes(s[i]) && i == 0) {
            result = 0;
            break;
        }
        if (leftBraces.includes(s[i])){
            bracesStore.push(s[i]);
            continue;
        }
        const rightEquivalent =  bracesStore.pop();
        if (s[i] === ')' && rightEquivalent !== '(') {
            result = 0;
            continue;
        };
        if (s[i] === ']' && rightEquivalent !== '[') {
            result = 0;
            continue;
        }
        if (s[i] === '}' && rightEquivalent !== '{') {
            result = 0;
            continue;
        }
    }
    return result;
}

//Test 1 
//console.log(isProperlyNested("{[()()]}"));

//Test 2
//console.log(isProperlyNested("([)()]"));

//Test 3
//console.log(isProperlyNested("{}"));