/*Калькулятор: префиксная нотация*/
function CalcIt(n) {
  (typeof n == "string")
    ? Calc(n + ' ')
    : console.log('not correct data!');
}

function Calc(n) {
  let expression = [];
  let nowNum = ''

  for (let value of n) {
    if (CheckOperator(value)) {
      expression.push(value);
    }  
    if (CheckNumeric(value)) {
      nowNum += value;
    } else {
      if (nowNum != '') {
        expression.push(parseInt(nowNum));
        nowNum = '';
      }
    }
    if (CheckSeparator(value)) {
      if (expression.length > 2 && value != '(') {
        if (!calculatIt(expression)) {
          console.log('Not correct operaton / 0'); /*некорректно расставлены скобочки*/
          return;
        }
      }
      if (value == '(') {
        expression.push(value);
      }
      if (value == ')') {
        if (parseInt(expression[expression.length - 1]) && expression[expression.length - 2] == '(') {
          nowNum = expression.pop();
          expression.pop();
          expression.push(nowNum);
          nowNum = '';
        } else {
          console.log('Not correct expression'); /*некорректно расставлены скобочки*/
          return;
        }
      }
    } 
    if (!CheckOperator(value) && !CheckNumeric(value) && !CheckSeparator(value)) {
      console.log('Not correct expression'); /*присутствует некорректный символ*/
      return;
    } 
  }
  while (expression.length > 2 && checkCorrect(expression)) { /*дорасчет данных, оставшихся в массиве*/
    if (!calculatIt(expression)) {
      console.log('Not correct operaton / 0'); /*некорректно расставлены скобочки*/
      return;
    }
  }
  (expression.length > 1) /*в итоговом массиве больше 1го элемента ==> некорректный ввод*/
    ? console.log('Not correct expression')
    : console.log(expression.pop());
}

/*оператор?*/
function CheckOperator(f) {
  let operators = "+-*/−";
  for (let i = 0; i < operators.length; i++) {
    if (f == operators[i]) {
      return true;
    } 
  }
  return false;
}

/*разделитель?*/
function CheckSeparator(f) {
  let separators = " ()";
  for (let i = 0; i < separators.length; i++) {
    if (f == separators[i]) return true;
  }
  return false;
}

/*цифра?*/
function CheckNumeric(f) {
  if (parseInt(f)) {
    return true; 
  } else {   
    return false;
  }
}

/*проверка корректности данных для расчета*/
function checkCorrect(expression) {
  if (!parseInt(expression[expression.length - 1]) || !parseInt(expression[expression.length - 2]) 
    || !CheckOperator(expression[expression.length - 3])) {
    return false
  } else {
    return true;
  }
}

/*расчет*/
function calculatIt(expression) {
  if (!checkCorrect(expression)) {
    return;
  }

  let num2 = expression.pop();
  let num1 = expression.pop();
  let nowOperator = expression.pop();

  switch(nowOperator) {
    case '+': expression.push( num1 + num2 )
      break
    case '-': /*разные минусы*/
    case '−': expression.push( num1 - num2 )
      break
    case '*': expression.push( num1 * num2 )
      break
    case '/': 
      if (num2 != 0) {
        expression.push( num1 / num2 );
      } else {
        return false;
      }
  }
}
