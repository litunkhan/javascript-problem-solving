
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