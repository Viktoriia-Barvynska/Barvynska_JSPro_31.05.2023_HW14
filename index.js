//=================HW14==================
/* Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28 */
function createSum() {
  let sum = 0;

  return function (num) {
    sum += num;
    return sum;
  };
}

const sum = createSum();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28

//===========================================================================

/*
Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву. */
function calculateAverage(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }

  if (count === 0) {
    return 0; // Повернути 0, якщо немає числових елементів
  }

  return sum / count;
}

const array = [1, 2, '3', 4, 'five', 6, null, 7];
const average = calculateAverage(array);
console.log(average); 

//=======================================================================

/*
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача. */
function doMath(x, znak, y) {
  let result;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
    default:
      console.log('Неправильний знак');
      return; // Вихід з функції, якщо знак неправильний
  }

  console.log(result);
}


const x = parseFloat(prompt('Введіть перше число:'));
const znak = prompt('Введіть знак (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Введіть друге число:'));

doMath(x, znak, y);

//===========================================================================

/*
Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач. */
function fillArray() {
  const mainLength = parseInt(prompt('Введіть довжину основного масиву:'));
  const innerLength = parseInt(prompt('Введіть довжину внутрішніх масивів:'));

  const array = [];

  for (let i = 0; i < mainLength; i++) {
    const innerArray = [];

    for (let j = 0; j < innerLength; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
      innerArray.push(value);
    }

    array.push(innerArray);
  }

  console.log(array);
}

fillArray();

//=======================================================================

/*
Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач
*/
function removeChars(str, charsToRemove) {
  for (let i = 0; i < charsToRemove.length; i++) {
    const regex = new RegExp(charsToRemove[i], 'g');
    str = str.replace(regex, '');
  }

  return str;
}


const inputString = prompt('Введіть рядок:');
const charsToRemove = prompt('Введіть символи для видалення (через кому):').split(',');

const result = removeChars(inputString, charsToRemove);
console.log(result);
