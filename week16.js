//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById('practicum');

function makeOne() {
	 // Находим все формы на странице
	const forms = document.forms;

	 // Получаем количество найденных форм
	const formsCount = forms.length;
	 // Выводим количество форм в параграф с id "practicum"
	paragraph.textContent = `Количество найденных форм: ${formsCount}`;
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {
	  // Находим первую форму на странице
	const firstForm = document.forms[0];

	  // Получаем значение атрибута "name" формы
	const formName = firstForm.getAttribute('name');
	
	  // Выводим значение атрибута "name" в параграф с id "practicum2"
	paragraphTwo.textContent = `Значение атрибута "name" первой формы: ${formName}`;
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
	// Находим последнюю форму на странице
	const forms = document.forms;
	const lastForm = forms[forms.length - 1];

	// Получаем значение атрибута "name" формы
	const formName = lastForm.getAttribute('name');

	// Выводим значение атрибута "name" в параграф с id "practicum3"
	paragraphThree.textContent = `Значение атрибута "name" последней формы: ${formName}`;
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById('practicum4');

function makeFour() {
	// Получаем все формы на странице
	const forms = document.forms;
  
	// Создаем пустой массив для хранения названий форм
	const formNames = [];
  
	// Проходимся по каждой форме и получаем их названия
	for (let i = 0; i < forms.length; i++) {
	  const formName = forms[i].getAttribute('name');
	  formNames.push(formName);
	}
  
	// Преобразуем массив в строку, разделив названия запятыми
	const formsString = formNames.join(', ');
  
	// Выводим строку названий форм в параграф с id "practicum4"
	paragraphFour.textContent = `Названия форм: ${formsString}`;
  }
  
  document.querySelector('.b-4').onclick = makeFour;
  

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById('practicum5');

function makeFive() {
	 // Получаем коллекцию всех форм на странице
	 const forms = document.forms;

	 // Получаем третью форму по индексу (индексация начинается с 0)
	 const thirdForm = forms[2];
   
	 // Получаем количество элементов в форме
	 const elementsCount = thirdForm.elements.length;
   
	 // Выводим количество элементов в параграф с id "practicum5"
	 paragraphFive.textContent = `Количество элементов в третьей форме: ${elementsCount}`;
}

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById('practicum6');

function makeSix() {
	  // Получаем коллекцию всех форм на странице
	  const forms = document.forms;

	  // Получаем вторую форму по индексу (индексация начинается с 0)
	  const secondForm = forms[1];
	
	  // Получаем количество элементов в форме
	  const elementsCount = secondForm.elements.length;
	
	  // Выводим количество элементов в параграф с id "practicum6"
	  paragraphSix.textContent = `Количество элементов во второй форме: ${elementsCount}`;
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {
	// Получаем коллекцию всех форм на странице
	const forms = document.forms;
  
	// Находим вторую форму по индексу (индексы начинаются с 0)
	const secondForm = forms[1];
  
	// Получаем коллекцию элементов второй формы
	const formElements = secondForm.elements;
  
	// Создаем пустую строку для хранения перечисления названий элементов
	let elementsList = '';
  
	// Перебираем элементы формы и добавляем их названия в elementsList
	for (let i = 0; i < formElements.length; i++) {
	  elementsList += `-${formElements[i].name}`;
	}
  
	// Выводим перечисление элементов в параграф с id "practicum7"
	paragraphSeven.textContent = `Перечисление названий элементов второй формы: ${elementsList}`;
  }
  

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById('practicum8');

function makeEight() {
	// Получаем коллекцию всех форм на странице
	const forms = document.forms;
  
	// Находим первую форму по индексу (индексы начинаются с 0)
	const firstForm = forms[0];
  
	// Получаем коллекцию элементов первой формы
	const formElements = firstForm.elements;
  
	// Создаем пустую строку для хранения перечисления названий элементов
	let elementsList = '';
  
	// Перебираем элементы формы и добавляем их названия в elementsList
	for (let i = 0; i < formElements.length; i++) {
	  elementsList += `-${formElements[i].name}`;
	}
  
	// Выводим перечисление элементов в параграф с id "practicum8"
	paragraphEight.textContent = `Перечисление названий элементов первой формы: ${elementsList}`;
  }

document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById('practicum9');

function makeNine() {
	 // Получаем коллекцию всех форм на странице
	 const forms = document.forms;

	 // Находим третью форму по индексу (индексы начинаются с 0)
	 const thirdForm = forms[2];
   
	 // Получаем коллекцию элементов третьей формы
	 const formElements = thirdForm.elements;
   
	 // Создаем пустую строку для хранения перечисления названий элементов
	 let elementsList = '';
   
	 // Перебираем элементы формы и добавляем их названия в elementsList
	 for (let i = 0; i < formElements.length; i++) {
	   elementsList += `-${formElements[i].name}`;
	 }
   
	 // Выводим перечисление элементов в параграф с id "practicum9"
	 paragraphNine.textContent = `Перечисление названий элементов третьей формы: ${elementsList}`;
}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Выведите на экран значенеие radio кнопки четвёртой формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

const paragraphTen = document.getElementById('practicum10');

function makeTen() {
	// Получаем коллекцию всех форм на странице
	const forms = document.forms;

	// Находим четвертую форму по индексу (индексы начинаются с 0)
	const fourthForm = forms[3];
  
	// Находим radio кнопку внутри четвертой формы по её имени
	const radioInput = fourthForm.elements['radioName'];
  
	// Получаем значение выбранной radio кнопки
	const radioValue = radioInput.value;
  
	// Выводим значение radio кнопки в параграф с id "practicum10"
	paragraphTen.textContent = `Значение radio кнопки четвертой формы: ${radioValue}`;
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById('practicum11');

function makeEleven() {
	// Получаем доступ к форме
	const form = document.forms[0]; // Предполагается, что первая форма на странице

	// Получаем доступ к элементу select в форме
	const selectElement = form.elements['selectName']; // Замените 'selectName' на имя вашего элемента select
  
	// Создаем пустую строку для хранения значений опций
	let optionsValues = '';
  
	// Используем цикл для перебора опций
	for (let i = 0; i < selectElement.options.length; i++) {
	  // Получаем значение каждой опции и добавляем его в optionsValues
	  optionsValues += `-${selectElement.options[i].value}`;
	}
  
	// Выводим значения опций на страницу
	paragraphEleven.textContent = `Значения опций первой формы: ${optionsValues}`;
}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

const paragraphTwelve = document.getElementById('practicum12');

function makeTwelve() {
	// Получаем доступ к форме
	const form = document.forms[1]; // Предполагается, что вторая форма на странице

	// Получаем доступ к чекбоксам в форме
	const checkboxes = form.elements;
  
	// Создаем пустую строку для хранения значений атрибутов id чекбоксов
	let checkboxIds = '';
  
	// Используем цикл для перебора чекбоксов
	for (let i = 0; i < checkboxes.length; i++) {
	  // Проверяем, что текущий элемент - чекбокс
	  if (checkboxes[i].type === 'checkbox') {
		// Получаем значение атрибута id и добавляем его в checkboxIds
		checkboxIds += `-${checkboxes[i].id}`;
	  }
	}
  
	// Выводим значения атрибутов id чекбоксов на страницу
	paragraphTwelve.textContent = `Значения атрибутов id чекбоксов второй формы: ${checkboxIds}`;
}

document.querySelector('.b-12').onclick = makeTwelve;

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById('practicum13');

function checkButton(e) {
	 // Получаем доступ к форме
	 const form = document.forms[3]; // Предполагается, что четвертая форма на странице

	 // Получаем доступ к radio кнопке в форме
	 const radioButton = form.elements['radioButtonName']; // Замените 'radioButtonName' на имя вашей radio кнопки
   
	 // Проверяем, выбрана ли кнопка
	 if (radioButton.checked) {
	   // Если кнопка выбрана, выводим сообщение
	   paragraphThirteen.textContent = 'Кнопка выбрана';
	 } else {
	   // Если кнопка не выбрана, выводим другое сообщение
	   paragraphThirteen.textContent = 'Кнопка не выбрана';
	 }
}

document.querySelector('.b-13').addEventListener('click', checkButton);

//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById('practicum14');

function checkOption() {
	//Ваш код
}

document.querySelector('.b-14').onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
	// Получаем доступ к форме
	const form = document.forms[0]; // Предполагается, что первая форма на странице

	// Получаем доступ к элементу select в форме
	const selectElement = form.elements['selectName']; // Замените 'selectName' на имя вашего элемента select
  
	// Устанавливаем выбранным второй вариант
	selectElement.selectedIndex = 1;
  
	// Получаем выбранный вариант
	const selectedOptionValue = selectElement.value;
  
	// Используем условный оператор для проверки выбранного варианта
	if (selectedOptionValue === 'value1') {
	  paragraphFourteen.textContent = 'Выбран первый вариант';
	} else if (selectedOptionValue === 'value2') {
	  paragraphFourteen.textContent = 'Выбран второй вариант';
	} else if (selectedOptionValue === 'value3') {
	  paragraphFourteen.textContent = 'Выбран третий вариант';
	}
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
	 // Получаем доступ к форме
	 const form = document.forms[1]; // Предполагается, что вторая форма на странице

	 // Получаем доступ к элементу checkbox в форме
	 const checkboxElement = form.elements['checkboxOne']; 
	 // Устанавливаем значение checked равным true для выбранного варианта (Вариант 3)
	 checkboxElement.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

/*const formOne = document.forms.formOne;
const errorMessage = document.getElementById('errorMessage');

formOne.addEventListener('submit', function (event) {
  event.preventDefault(); // Отмена отправки

  // Получаем доступ к каждому полю формы
  const inputField1 = formOne.elements['firstName']; // Замените 'inputName1' на имя вашего первого поля ввода
  const inputField2 = formOne.elements['firstEmail']; // Замените 'inputName2' на имя вашего второго поля ввода
  // Добавьте переменные для каждого поля формы

  // Используем условные операторы для проверки каждого поля на заполненность
  if (inputField1.value.trim() === '') {
    // Если первое поле не заполнено, выводим сообщение об ошибке
    errorMessage.textContent = 'Пожалуйста, заполните все поля формы.';
  } else if (inputField2.value.trim() === '') {
    // Если второе поле не заполнено, выводим сообщение об ошибке
    errorMessage.textContent = 'Пожалуйста, заполните все поля формы.';
  } else {
    // Если все поля заполнены, отправляем форму
    errorMessage.textContent = ''; // Очищаем сообщение об ошибке
    formOne.submit();
  }
});*/


//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки
	 // Получаем доступ к каждому полю формы
	 const inputField1 = formOne.elements['inputName1']; // Замените 'inputName1' на имя вашего первого поля ввода
	 const inputField2 = formOne.elements['inputName2']; // Замените 'inputName2' на имя вашего второго поля ввода
	 // Добавьте переменные для каждого поля формы
   
	 // Используем условные операторы для проверки каждого поля на заполненность
	 if (inputField1.value.trim() === '' || inputField2.value.trim() === '') {
	   // Если хотя бы одно поле не заполнено, выводим сообщение об ошибке
	   errorMessage.textContent = 'Пожалуйста, заполните все поля формы.';
	 } else {
	   // Если все поля заполнены, очищаем сообщение об ошибке, отправляем форму и очищаем поля
	   errorMessage.textContent = ''; // Очищаем сообщение об ошибке
	   formOne.reset(); // Очищаем все поля формы
	 }
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const selectElement = document.getElementById('mySelect'); // Замените 'mySelect' на id вашего элемента select

selectElement.onchange = function () {
  // Получаем выбранную опцию
  const selectedOption = selectElement.options[selectElement.selectedIndex].value;

  // Используем условные операторы для проверки выбранной опции и изменения цвета фона
  if (selectedOption === 'option1') {
    document.body.style.backgroundColor = 'lightblue';
  } else if (selectedOption === 'option2') {
    document.body.style.backgroundColor = 'lightgreen';
  } else if (selectedOption === 'option3') {
    document.body.style.backgroundColor = 'lightcoral';
  } else {
    // Если ни одна из опций не выбрана, можно вернуть цвет по умолчанию
    document.body.style.backgroundColor = '';
  }
};

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const formOne = document.forms.formOne;
const emailInput = formOne.elements['inputEmail']; // Замените 'inputEmail' на имя вашего поля Email
const errorMessage = document.getElementById('errorMessage');

emailInput.oninput = function () {
  // Регулярное выражение для проверки формата Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Проверяем введенное значение поля Email
  const isValidEmail = emailRegex.test(emailInput.value);

  // Изменяем стиль поля Email в зависимости от результата проверки
  if (isValidEmail) {
    emailInput.classList.remove('error'); // Удаляем класс с ошибкой
    errorMessage.textContent = ''; // Очищаем сообщение об ошибке
  } else {
    emailInput.classList.add('error'); // Добавляем класс с ошибкой
    errorMessage.textContent = 'Пожалуйста, введите корректный Email.'; // Выводим сообщение об ошибке
  }
};

//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector('.b-21').onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {
		//Ваш код
	} else {
		document.getElementById('result21').textContent = 'Проверка пройдена';
	}
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector('.b-21').onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;
  
	checkboxes.forEach(function (checkbox) {
	  if (checkbox.checked) {
		isChecked = true;
	  }
	});
  
	if (!isChecked) {
	  event.preventDefault(); // Отмена отправки формы
	  document.getElementById('result21').textContent = 'Выберите хотя бы один чекбокс';
	} else {
	  document.getElementById('result21').textContent = 'Проверка пройдена';
	}
  };
  

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
const fourthForm = document.forms.formFour;
const registerOption = fourthForm.elements['fourthName']; 
const submitButton = fourthForm.elements['fourthButton']; 

registerOption.addEventListener('change', function () {
  // Проверяем, выбрана ли опция "Я хочу зарегистрироваться"
  if (registerOption.value === 'register') {
    submitButton.disabled = false; // Разблокируем кнопку
  } else {
    submitButton.disabled = true; // Заблокируем кнопку
  }
});

//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"
//Подсказка: для установки атрибута используйте методы forEach и setAttribute

document.querySelector('.b-24').onclick = function () {
	input.setAttribute('placeholder', 'Введите данные');
};

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').onclick = function () {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.style.border = '2px solid #00ff00';
        });

        input.addEventListener('blur', function () {
            input.style.border = ''; // Восстанавливаем стандартную границу
        });
    });
};


//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').onclick = function (event) {
    event.preventDefault();

    // Получаем значение placeholder из поля с именем в третьей форме
    const placeholderValue = document.querySelector('form:nth-child(3) input[name="name"]').getAttribute('placeholder');

    // Отображаем значение в элементе с id "result26"
    document.getElementById('result26').innerText = placeholderValue;
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');
const result27Element = document.getElementById('result27');

formTwoInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        result27Element.innerText = 'Изменение внесено';
    });
});


//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById('firstSelect');
const result28Element = document.getElementById('result28');

selectFormThree.addEventListener('change', function () {
    const selectedOption = selectFormThree.options[selectFormThree.selectedIndex].text;
    result28Element.innerText = `Опция "${selectedOption}" выбрана`;
});


//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = formThree.elements.thirdName;
const emailInputThree = formThree.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
    event.preventDefault();

    if (nameInputThree.value && emailInputThree.value) {
        console.log('Имя:', nameInputThree.value);
        console.log('Email:', emailInputThree.value);
    } else {
        console.log('Пожалуйста, заполните все поля формы.');
    }
}

formThree.addEventListener('submit', handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById('result30');

formTwo.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
    const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);

    console.log('Выбранные варианты:', selectedOptions);
}
