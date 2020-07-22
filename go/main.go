// Question 1
// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤
// P < Q < R < N and:
// A[P] + A[Q] > A[R]
// A[Q] + A[R] > A[P]
// A[R] + A[P] > A[Q]
// Write a function:
// that, given an array A consisting of N integers, returns 1 if there exists a
// triangular triplet for this array and returns 0 otherwise.


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


package main

import (
	"fmt"
	"strings"
)

// CHALLENGE 1
func isTriangular(arrayA []int) (result int) {
	length := len(arrayA)
	if length < 3 {
		result = 0;
	}
	result = 0
	for i:= 0; i < length - 2; i++ {
		if arrayA[i] + arrayA[i + 1] > arrayA[i + 2] {
			result = 1;
            break;
		}
	}
	return 
}

// CHALLENGE 2
func isProperlyNested(s string) (result int) {
	leftBraces := "{[("
	rightBraces := ")]}"
	result = 1
	sArr := strings.Fields(s)
	braceStore := make([]string, 0)
	for i, v := range sArr {
		if strings.Contains(rightBraces, v) && i == 0 {
			result = 0;
			break;
		}
		if strings.Contains(leftBraces, v) {
			braceStore = append(braceStore, v);
			continue;
		}
		rightEquivalent :=  braceStore[len(braceStore) - 1]
		braceStore = braceStore[:len(braceStore) - 1]
		if (sArr[i] == string(')') && rightEquivalent != string('(')) {
			result = 0;
			continue;
		};
		if (sArr[i] == string(']') && rightEquivalent != string('[')) {
			result = 0;
			continue;
		}
		if (sArr[i] == string('}') && rightEquivalent != string('{')) {
			result = 0;
			continue;
		}
	}
	return
	}
// CHALLENGE 3	
	func getDominator(arr []int) (result interface {}) {
		mapArr := make(map[int][]int)
		for i, v := range arr {
		  mapArr[v] = append(mapArr[v], i)
		}
		var dominant [] int
		for _, v := range mapArr {
		if arrLen := len(arr) / 2; float64(len(v)) > float64(arrLen){ 
		dominant = v
		break;
		}
		}
		if len(dominant) > 0 {
		result = dominant
		} else {
		result = -1
		}
		return
		}

func main(){
	// Test 1
	// fmt.Println(isTriangular([]int{10, 2, 5, 1, 8, 20}))

	// Test 1
	// fmt.Println(isTriangular([]int{10, 50, 5, 1}))

	// Test 2
	 fmt.Println(isProperlyNested("{[()()]}"))
}