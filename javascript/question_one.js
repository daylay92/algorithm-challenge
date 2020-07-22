// Question 1
// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤
// P < Q < R < N and:
// A[P] + A[Q] > A[R]
// A[Q] + A[R] > A[P]
// A[R] + A[P] > A[Q]
// Write a function:
// that, given an array A consisting of N integers, returns 1 if there exists a
// triangular triplet for this array and returns 0 otherwise.

const isTriangular = arrayA => {
    const len = arrayA.length;
    if (len < 3) return 0;
    arrayA.sort((a, b) => a - b);
    let result = 0
    for (let i = 0; i < len - 2; i++) {
        if (arrayA[i] + arrayA[i + 1] > arrayA[i + 2]) {
            result = 1;
            break;
        }
    }
    return result;
}

//Test 1 
//console.log(isTriangular([10, 2, 5, 1, 8, 20]))

// Test 2
//console.log(isTriangular([10, 50, 5, 1]))
