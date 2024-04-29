## Part 1: A Quick Introduction...

### var declaration

**Q1**: Assuming that add=true, the code prints the result of num1 + num2. It will print
```
values added: [num1 + num2]
```

**Q2**: Assuming that add=false, the code will take the line `var result = 0`. It will print
```
final result: 0
```

### let declaration

**Q3**: Assuming that add=true, the code prints the result of num1 + num2. It will print
```
values added: [num1 + num2]
```

**Q4**: The variable `let result = 0` is only defined in scope for lines 3-11. Line 13 is not within the same block scope as the `result` variable, so the code will return an error. 

### const declaration

**Q5**: `result` is initially declared in line 3 `const result = 0`. The code attempts to change `result` in line 7, which is not allowed with `const`, so the code will return an error.

**Q6**: The same logic applies in Q5 ^ Additionally, the variable `const result = 0` is only defined in scope for lines 3-11. Line 13 is not within the same block scope as the `result` variable, so the code will return an error. 

## Part 2: A Little More of a Challenge

**Q1**: After running the for loop, the code will return the value of `prices.length` from the `prices` parameter with no error.

**Q2**: After running the for loop, the code will return the last calculation of `discountedPrice` from the last `prices` with no error.

**Q3**: After running the for loop, the code will return the last calculation of `finalPrice` from the last `prices` with no error.

**Q4**: The code will return an array of all discounted prices

**Q5**: The variable `let i = 0` is only defined in scope for lines 6-10. Line 12 is not within the same block scope as the `i` variable, so the code will return an error. 

**Q6**: The same logic applies in Q5 ^ and the code will return an error. 

**Q7**: The variable `finalPrice` is defined in line 4. It remains unchanged in the for loop, and it will print:
```
0
```

**Q8**: The variable `discounted` is defined in line 3. It remains unchanged in the for loop, and it will return an empty array

**Q9**: The variable `i` is only defined in scope for the for loop in lines 6-9. Line 11 is not within the same block scope as the `i` variable, so the code will return an error. 

**Q10**: The code will return the value of `prices.length` with no error

**Q11**: `discounted` is initially declared in line 3 `const discounted = []`. The code attempts to change `discounted` in line 8, which is not allowed with `const`, so the code will return an error.
