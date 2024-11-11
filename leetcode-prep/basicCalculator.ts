/*

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.

*/

function calculate(s: string): number {
  const others = ["+", "-", " ", "(", ")"];
  const resultStack: number[] = [];
  const signStack: number[] = [];

  let currResult = 0;
  let currSign = 1;

  const sArr = s.split("");
  const sLength = sArr.length;
  let i = 0;
  while (i < sLength) {
    let val = sArr[i];
    switch (val) {
      case " ":
        break;
      case "-":
        currSign = -1;
        break;

      case "+":
        currSign = 1;
        break;

      case "(":
        resultStack.push(currResult);
        signStack.push(currSign);
        currResult = 0;
        currSign = 1;

        break;

      case ")":
        let prevResult = resultStack.pop() ?? 0;
        let prevSign = signStack.pop() ?? 1;
        currResult = prevResult + prevSign * currResult;
        break;

      default:
        let nums = val;
        while (i < sLength - 1 && !others.includes(sArr[i + 1])) {
          nums += sArr[i + 1];
          i++;
        }
        currResult += currSign * +nums;
    }

    i++;
  }

  return currResult;
}
