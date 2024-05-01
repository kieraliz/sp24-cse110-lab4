function calculateSum(num1, num2) {
    
    let newNum1 = Number(num1);
    let newNum2 = Number(num2); 

    if (isNaN(num1) || isNaN(num2)) {
      return 'Invalid input';
    }
    
    let result = newNum1 + newNum2;
    return result;
}

  