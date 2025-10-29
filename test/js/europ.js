const europa = [
    {country: 'Австрия', capital: 'Вена', explanation: 'Вена - федеральная столица Автрии. Первое упоминание города Вены встречается в 881 году в Зальцбургских анналах в контексте борьбы с венгерскими племенамию. Значение слова установлено как «Лесной ручей», под которым подразумевается современная река Вена.'},
    {country: 'Албания', capital: 'Тирана', explanation: ''},
    {country: 'Андорра', capital: 'Андорра-ла-Велья', explanation: ''},
    {country: 'Беларусь', capital: 'Минск', explanation: ''},
    {country: 'Бельгия', capital: 'Брюссель', explanation: ''},
    {country: 'Болгария', capital: 'София', explanation: ''},
    {country: 'Босния и Герцеговина', capital: 'Сараево', explanation: ''},
    {country: 'Ватикан', capital: 'Ватикан', explanation: ''},
    {country: 'Великобритания', capital: 'Лондон', explanation: 'Лондон — крупнейший город и столицы Великобритании. Согласно легенде, Лондон был основан Брутом Троянским и назван Troia Nova (с латыни Новая Троя). Однако это предание не подтверждается археологическими раскопками, и считается, что Лондон основали римляне в 43 году н. э.'},
    {country: 'Венгрия', capital: 'Будапешт', explanation: ''},
    {country: 'Германия', capital: 'Берлин', explanation: ''},
    {country: 'Греция', capital: 'Афины', explanation: ''},
    {country: 'Дания', capital: 'Копенгаген', explanation: ''},
    {country: 'Ирландия', capital: 'Дублин', explanation: ''},
    {country: 'Исландия', capital: 'Рейкьявик', explanation: ''},
    {country: 'Испания', capital: 'Мадрид', explanation: 'Мадрид — столица и крупнейший город Испании. Существует немало версий происхождения названия города. Известно, что он упоминается в 939 году под названием Магерит, что происходит, предположительно, от арабского ма́дара «город». Согласно другой версии, название — доарабское, от староиспанского maderita «лесная поросль».'},
    {country: 'Италия', capital: 'Рим', explanation: ''},
    {country: 'Латвия', capital: 'Рига', explanation: ''},
    {country: 'Литва', capital: 'Вильнюс', explanation: ''},
    {country: 'Лихтенштейн', capital: 'Вадуц', explanation: ''},
    {country: 'Люксембург', capital: 'Люксембург', explanation: ''},
    {country: 'Мальта', capital: 'Валлетта', explanation: ''},
    {country: 'Молдова', capital: 'Кишинёв', explanation: ''},
    {country: 'Монако', capital: 'Монако', explanation: ''},
    {country: 'Нидерланды', capital: 'Амстердам', explanation: ''},
    {country: 'Норвегия', capital: 'Осло', explanation: ''},
    {country: 'Польша', capital: 'Варшава', explanation: ''},
    {country: 'Португалия', capital: 'Лиссабон', explanation: ''},
    {country: 'Россия', capital: 'Москва', explanation: ''},
    {country: 'Румыния', capital: 'Бухарест', explanation: ''},
    {country: 'Сан-Марино', capital: 'Сан-Марино', explanation: ''},
    {country: 'Северная Македония', capital: 'Скопье', explanation: ''},
    {country: 'Сербия', capital: 'Белград', explanation: ''},
    {country: 'Словакия', capital: 'Братислава', explanation: ''},
    {country: 'Словения', capital: 'Любляна', explanation: ''},
    {country: 'Украина', capital: 'Киев', explanation: ''},
    {country: 'Финляндия', capital: 'Хельсинки', explanation: ''},
    {country: 'Франция', capital: 'Париж', explanation: ''},
    {country: 'Хорватия', capital: 'Загреб', explanation: ''},
    {country: 'Черногория', capital: 'Подгорица', explanation: ''},
    {country: 'Чехия', capital: 'Прага', explanation: ''},
    {country: 'Швейцария', capital: 'Берн', explanation: ''},
    {country: 'Швеция', capital: 'Стокгольм', explanation: ''},
    {country: 'Эстония', capital: 'Таллин', explanation: ''}
]
// Функция рандома
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// алгоритм Фишера-Йетса (Перешивание)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

const form = document.querySelector('.form') // Форма игры

const numberOfQuestions = 10 // Кромчество вопросов

const droppedNumbers = [] // Создание массива для номеров вопросов
while (droppedNumbers.length < numberOfQuestions) { 
    const a = getRandomInt(exercise.length) // Рандомное число А
    if (droppedNumbers.includes(a)) {
    } else {
        droppedNumbers.push(a)
    }
} // Заполнение массива номеров вопросов рандомными неповторяющимися числами

for (let i = 0; i < droppedNumbers.length; i++) {
    q(droppedNumbers[i], europa, country, capital, explanation)
}
function name(params) {
    
}

function q(droppedNumber, exercise, question, answer, explanation) {
    const que = exercise[droppedNumber].question // Вопрос
    const ans = exercise[droppedNumber].answer // Ответ
    const exp = exercise[droppedNumber].explanation // Пояснение

    
    const answerArray = [] // Объявление массива вариантов ответов 
    answerArray.push(ans) // Добавление в массив ответов правильного ответа 
    while (answerArray.length < 4) { 
        const b = getRandomInt(exercise.length) // Рандомное число B
        if (answerArray.includes(exercise[b].answer)) {
        } else {
            answerArray.push(exercise[b].answer)
        }
    } // Заполнение массива ответов неверными и неповторяющимися ответами 
    shuffle(answerArray) // Перемешивание массива ответов 
    
    const formBlock = document.createElement('div') // Блок для одного вопроса
    formBlock.classList.add('form__block')

    const formTitle = document.createElement('h2') // Создание заголовка для вопроса
    formTitle.classList.add('form__title')
    formTitle.textContent = `Столицей государства ${que} является город:`

    const formContent = document.createElement('div')  // Создание блока для ответов
    formContent.classList.add('form__content')

    const formExplanation = document.createElement('p') // Создание блока для пояснения
    formExplanation.classList.add('form__explanation')

    for (let i = 0; i < answerArray.length; i++) {
        const btnAnswer = document.createElement('button') 
        btnAnswer.setAttribute('type', 'button')
        btnAnswer.classList.add('btn')
        btnAnswer.classList.add('btn-answer')
        btnAnswer.textContent = answerArray[i]
        formContent.append(btnAnswer)
        btnAnswer.addEventListener('click', function () {
            if (btnAnswer.textContent === ans) {
                btnAnswer.classList.add('right')
            } else {
                btnAnswer.classList.add('wrong')
            }
            formExplanation.textContent = exp
            const btnAnswerArray = formContent.querySelectorAll('.btn-answer')
            for (let i = 0; i < btnAnswerArray.length; i++) {
                const element = btnAnswerArray[i];
                element.disabled = true
            } // Все кнопки disabled
        }) // Окрашивание кнопок верно/неверно
        
    } // Создание кнопок ответов
    
    formBlock.append(formTitle, formContent, formExplanation)
    form.append(formBlock)   
}




