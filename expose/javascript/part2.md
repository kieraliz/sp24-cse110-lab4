## Part 2: A Little More of a Challenge

**Q1**: After running the for loop, the code will return the value of `prices.length` from the `prices` parameter. It will print
```
3
```

**Q2**: After running the for loop, the code will return the last calculation of `discountedPrice` from the last `prices`. It will print
```
150
```

**Q3**: After running the for loop, the code will return the last calculation of `finalPrice` from the last `prices`. It will print
```
150
```

**Q4**: The code will return an array of all discounted prices, `[50, 100, 150]`

**Q5**: The variable `let i = 0` is only defined in scope for lines 6-10. Line 12 is not within the same block scope as the `i` variable, so the code will return an error. 

**Q6**: The same logic applies in Q5 ^ and the code will return an error. 

**Q7**: The variable `finalPrice` is calculated in the for loop, and it will print:
```
150
```

**Q8**: The variable `discounted` is calculated in the for loop, and it will return the final discounted array: `[50, 100, 150]`

**Q9**: The variable `i` is only defined in scope for the for loop in lines 6-9. Line 11 is not within the same block scope as the `i` variable, so the code will return an error. 

**Q10**: The code will return the value of `prices.length` with no error
```
3
```

**Q11**: `discounted` is initially declared in line 3 `const discounted = []`. The code attempts to change `discounted` in line 8, which is not allowed with `const`, so the code will return an error.

**Q12**: <br>
a. We access the student name with `student.name` <br>
b. We access the student Grad Year with `student["Grad Year"]` <br>
c. We access the student greeting with `student.greeting()` <br>
d. We access the student Favorite Teacher with `student["Favorite Teacher"].name` <br>
e. We access the student courseLoad at index 0 with `student.courseLoad[0]`

**Q13**: <br>
a. The number 2 is converted to a string '2' for the concatenation operation. The result is '3' + '2' = `32 (string)`<br>
b. The string '3' is converted to a number 3 for the subtraction operation. The result is 3 - 2 = `1 (number)` <br>
c. The null is converted to its numeric conversion 0 for the addition operation. The result is 3 + 0 = `3 (number)` <br>
d. The null is converted to a string for the concatenation operation. The result is '3' + 'null' = `3null (string)` <br>
e. The boolean true is converted to its numeric conversion 1 for the addition operation. The result is 1 + 3 = `4 (number)` <br>
f. The false is converted to its numeric conversion 0, and the null is converted to its numeric conversion 0 for the addition operation. The result is 0 + 0 = `0 (number)` <br>
g. The undefined is converted to a string for the concatenation operation. The result is '3' + 'undefined' = `3undefined (string)` <br>
h. The '3' is converted to a number 3, and the undefined is converted to its numeric conversion NaN for the subtraction operation. The result is 3 - NaN = `NaN (number)`

**Q14**: <br>
a. The '2' is converted to a number 2. When we make the number comparison 2 > 1, we get `true` <br>
b. We compare the first characters of the string, which will be '2' < '1'. Since '2' is lexigraphically higher than '1', then we get `false` <br>
c. The number 2 is converted to a string '2'. When we make the comparison '2' == '2', we get `true` <br>
d. We have two data types: the number 2 and the string '2'. When we make the comparison 2 === '2', we get `false` <br>
e. The boolean true is converted to its numeric conversion 1. When we compare the numbers 1 == 2, we get `false` <br>
f. The number 2 is a non-zero number so when we take Boolean(2) we get true. Then when compare the booleans true === true, we get `true`. 

**Q15**: The `==` equality check performs type conversions, while the `===` doesn't perform type conversions. 

**Q16**: See the file part2-question16.js

**Q17**: First, we make the function call to modifyArray in line 13. We create an empty array `newArr = []` in line 2. We iterate through the for loop for every element of the array parameter `[1,2,3]`. The very first time we enter line 4, we do `callback(1)` which becomes `doSomething(1)` (coming from our second parameter in line 13). This brings us to our doSomething function in lines 9-11 and returns 2. This result is returned to line 4 and pushed onto newArr. We repeat this method for the other values in the array. The final result is the array `[2,4,6]`

**Q18**: See the file part2-question18.js

**Q19**: First we print out 1 and 4 instantly with no delay. The next line #3 will execute after a 1 second delay. During this time of delay, the next line #4 starts to execute after a 0 second delay. This will print first the 3 then 2. In the end we get
```
1
4
3
2
```