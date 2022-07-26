
let input = document.querySelector('input[name="input"]');//находим input
input.addEventListener("change", addInput); // создаем обработчик события по изменению значения input 
let numbers = [];

function addInput(){
  while (true){
    numbers.push(input.value);
    input.value = ''; 
    alert('Введите значение');
    

    if (input.value === '' || !input.value === Number || button.onclick) break;
    
    }
  
  }

let button = document.querySelector('.button'); // находим кнопку
button.addEventListener("click", sortNumbers); //создаем обработчик событий для сортировки
button.addEventListener("click", sumInput); //создаем обработчик событий для вывода ссуммы

function sortNumbers(){
  let sortNumbers = document.querySelector('.sortNumbers'); //находим div куда будем складывать отсортированный массив
  sortNumbers.textContent = numbers.sort();
  }
  
function sumInput(){
  let sumNumbers = document.querySelector('.sumNumbers');//находим div куда будем складывать сумму
  let sum = 0;
  for (let number of numbers){
  sum = sum + number;
  };
  sumNumbers.textContent = sum;
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