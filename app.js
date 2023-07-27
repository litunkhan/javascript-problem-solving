
// question 1 
const  reverseString = (input)=> {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input.charAt(i);
    }
    return reversed;
  }
  const inputString = "hello world";
  const reversedString = reverseString(inputString);
  console.log(reversedString);

  // question 2

 const sumPositiveNumbers = (arr)=> {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const inputArray = [2, -5, 10, -3, 7];
  const result = sumPositiveNumbers(inputArray);
  console.log(result); 

  // question 3 

  const findMostFrequentElement =(arrs)=> {
    const elementCount = {};
    let mostFrequentElement;
    let maxCount = 0;
  
    for (let i = 0; i < arrs.length; i++) {
      const currentElement = arrs[i];
      elementCount[currentElement] = (elementCount[currentElement] || 0) + 1;
  
      if (elementCount[currentElement] > maxCount) {
        maxCount = elementCount[currentElement];
        mostFrequentElement = currentElement;
      }
    }
  
    return mostFrequentElement;
  }
  
  
  const inputArrays = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const results = findMostFrequentElement(inputArray);
  console.log(results); 

  // question 4

  const findTwoNumbersWithSum =(arr, target)=> {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    
    return [];
  }
  
  
  const inputArra = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const resultss = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(resultss);

// question 5
const calculate =(num1, operator, num2)=> {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero is not allowed!";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator. Please use +, -, *, or /";
  }
}
console.log(calculate(5, '+', 3)); 
console.log(calculate(10, '-', 4)); 
console.log(calculate(6, '*', 7)); 
console.log(calculate(12, '/', 3)); 
console.log(calculate(8, '/', 0)); 
console.log(calculate(5, '%', 3)); 

// question 6

const  generateRandomPassword=(length)=> {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*_-+=";

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}


const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// question 7

const romanToInteger =(romanNumeral)=> {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbol = romanNumeral[i];
    const nextSymbol = romanNumeral[i + 1];

    const currentValue = romanValues[currentSymbol];
    const nextValue = romanValues[nextSymbol];

    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
}


console.log(romanToInteger("IX")); 
console.log(romanToInteger("XXI")); 
console.log(romanToInteger("MMXXI")); 

// question 8 

const findSecondSmallest =(arr)=> {
  if (arr.length < 2) {
    throw new Error("Array should contain at least two numbers.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("Second smallest element not found.");
  }

  return secondSmallest;
}


const numbers = [5, 2, 9, 1, 5, 6];
const secondSmallestNumber = findSecondSmallest(numbers);
console.log("Second Smallest Number:", secondSmallestNumber);