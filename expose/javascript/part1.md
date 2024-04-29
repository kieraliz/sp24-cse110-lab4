## A Quick Introduction...

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



