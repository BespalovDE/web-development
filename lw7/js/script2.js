/*Калькулятор: префиксная нотация*/
function Calc(n) {
  (typeof n == "string")
    ? CalcImpl(n + ' ')
    : console.log('not correct data!');
}

function CalcImpl(n) {
  let expression = [];
  let nowNum = '';
  let i = 0;
  
  while (n.length > i) { /*пробегаем по строке string*/
    if (CheckOperator( n[i] )) { /*работа с оператором*/
      OperatorImpl(n, i, expression);
    }  
    if (CheckNumeric( n[i] ) || (CheckNumeric( n[i + 1]) && (n[i] == '-' || n[i] == '−'))) { /*работа с числом*/
      nowNum += n[i];
      i++;
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
    if (CheckSeparator( n[i] )) { /*работа с разделителем*/
      if (SeparatorImpl(n, i, expression)) {
        return;
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

function OperatorImpl(n, i, expression) {
  if (n[i] != '-' && n[i] != '−') {
    expression.push( n[i] );
  } else {
    if (CheckSeparator( n[i + 1] )) { /*если минус, то проверям не отрицательное ли это число*/
      expression.push( n[i] );
    }
  }
}

function SeparatorImpl(n, i, expression) {
  if (expression.length > 2 && n[i] != '(') {
    if (calculatIt(expression)) {
      console.log('Division by zero!'); /*Деление на ноль*/
      return true;
    }
  }
  if (n[i] == '(') {
    expression.push( n[i] );
  }
  if (n[i] == ')') {
    if (parseFloat(expression[expression.length - 1]) && expression[expression.length - 2] == '(') {
      let nowNum = expression.pop();
      expression.pop();
      expression.push(nowNum);
      nowNum = '';
    } else {
      console.log('Not correct expression'); /*некорректно расставлены скобочки*/
      return true;
    }
  }
  return false;
}

/*оператор?*/
function CheckOperator(f) {
  const operators = ["+", "-", "*", "/", "−"];
  return operators.includes(f);
}

/*разделитель?*/
function CheckSeparator(f) {
  const operators = [" ", "(", ")"];
  return operators.includes(f);
}

/*цифра?*/
function CheckNumeric(f) {
  if (parseFloat(f) > 0 || f === 0 || f == '0' || parseFloat(f) < 0 ) {
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
