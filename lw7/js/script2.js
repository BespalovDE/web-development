/*Калькулятор: префиксная нотация*/
function CalcIt(n) {
  (typeof n == "string")
    ? Calc(n + ' ')
    : console.log('not correct data!');
}

function Calc(n) {
  let expression = [];
  let nowNum = '';
  let i = 0;
  
  while (n.length > i) { /*пробегаем по строке string*/
    if (CheckOperator( n[i] )) {
      expression.push( n[i] );
    }  
    if (CheckNumeric( n[i] )) {
      while (CheckNumeric( n[i] ) || n[i] == '.') { /*считываем число*/
        nowNum += n[i];
        i++;
      }
      if (CheckNumeric(nowNum) && nowNum.indexOf('.', nowNum.indexOf('.') + 1) < 0) { /*если float и точек не более 2*/
        expression.push(parseFloat(nowNum));
      } else {
        console.log('Not correct expression'); /*присутствует некорректный ввод числа*/
        return;
      }
      nowNum = '';
      i--;
    }
    if (CheckSeparator( n[i] )) {
      if (expression.length > 2 && n[i] != '(') {
        if (calculatIt(expression)) {
          console.log('Division by zero!'); /*Деление на ноль*/
          return;
        }
      }
      if (n[i] == '(') {
        expression.push( n[i] );
      }
      if (n[i] == ')') {
        if (parseFloat(expression[expression.length - 1]) && expression[expression.length - 2] == '(') {
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
    if (!CheckOperator( n[i] ) && !CheckNumeric( n[i] ) && !CheckSeparator( n[i] )) {
      console.log('Not correct expression'); /*присутствует некорректный символ*/
      return;
    } 
    i++;
  }
  while (expression.length > 2 && checkCorrect(expression)) { /*дорасчет данных, оставшихся в массиве*/
    if (calculatIt(expression)) {
      console.log('Division by zero!'); /*Деление на ноль*/
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
  if (parseFloat(f) || f === 0 || f == '0') {
    return true; 
  } else {   
    return false;
  }
}

/*проверка корректности данных для расчета*/
function checkCorrect(expression) {
  if (!CheckNumeric(expression[expression.length - 1]) || !CheckNumeric(expression[expression.length - 2]) 
    || !CheckOperator(expression[expression.length - 3])) {
    return false
  } else {
    return true;
  }
}

/*расчет*/
function calculatIt(expression) {
  let notNullNum = false;

  if (checkCorrect(expression)) {
 
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
          expression.push( num1 / num2 )
        } else {
          notNullNum = true;
        }
    }
  }
  return notNullNum;
}
