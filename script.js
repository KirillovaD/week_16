const input = document.querySelector('input[name="input"]');//находим input
const button = document.querySelector('.button'); // находим кнопку

//Алгоритм:
//1. Как прочитатть массив?
//2. Как вывести массив?
let numbers = [];

input.addEventListener("change", addInput); // создаем обработчик события по изменению значения input-смена фокуса

button.addEventListener("click", sumNumbers); //создаем обработчик событий для вывода ссуммы
button.addEventListener("click", sortNumbers); //создаем обработчик событий для сортировки

function addInput(){
  let inputNumber = Number(input.value); //перед тем как положить значение в массив проверяем, является ли оно числом


  //ветка, когда у нас не число
  if (Number.isNaN(inputNumber)){ //если значение NaN - те не число, выходим с помощью return
    sumNumbers(); // когда мы пойдем по этой ветке мы хоти вывести сумму массива
    return; // выход из функции / break выход из массива
  }

  //ветка, когда число
  numbers.push(input.value); //добавляем в массив
  input.value = ''; //после добавления в массив обнуляем инпут
  printNumbers(); // вывод массива

  
 
}

function printNumbers(){ //функция для вывода массива
  let numbersArray = ''; //назначаем пременную, куда сначала будем записывать результаты, для всех алгоритмов суммы+ сначала очищаем результат куда кладем
  
  for (let i = 0; i < numbers.length; i++){ //метод перебора, чтобы вывести каждый элемент массива
    let number = numbers[i]; //сохраняем индекс в переменную

    if(i === numbers.length - 1) { //если это последний элемент
      numbersArray += number + "."; //без += числа будут записываться в одно и тоже место, а не накапливаться, нахожденени "суммы строк"
    } else {
      numbersArray += number + ", ";
    }  
  }
  document.querySelector('.numbers').textContent = numbersArray; // выводим данные в DOM один раз
}


//3. Как получить сумму этого массива?
function sumNumbers(){
  
  let sum = 0;
  for (let item of numbers){
  sum += +item;
  };
  document.querySelector('.sumNumbers').textContent = sum;
  }


//4. Как отсортировать массив?

function sortNumbers(){
  let sortedNumbers = [...numbers]; //копируем исходный массив в массив для сортироки
  sortedNumbers.sort(function(a, b){
    return a - b;
  });
  document.querySelector('.sortNumbers').textContent = sortedNumbers + ", ";
  }
  


      
  



// let arr = ['js', 'css', 'html',];
// console.log(arr[0])

// let arr2 = [0, 1, false, 2, undefined, '', 3, null,];
// let filterArr2 = arr2.filter(Boolean); //let filterArr2 = arr2.filter(Number) было
// console.log(filterArr2);

// let arr3 = [[1, 2], [1, 2, 3], [1, 2, 3, 4],];
// arr3.forEach(function(item, i){
//   if(item.length>3)
//   console.log(i)
// }