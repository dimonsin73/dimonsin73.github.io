// Массив вопросов с ответами
const exercise = [
    {question: 'Австрия', answer: 'Вена', explanation: 'Вена — федеральная столица Автрии. Первое упоминание города Вены встречается в 881 году в Зальцбургских анналах в контексте борьбы с венгерскими племенамию. Значение слова установлено как «Лесной ручей», под которым подразумевается современная река Вена.'},
    {question: 'Албания', answer: 'Тирана', explanation: ''},
    {question: 'Андорра', answer: 'Андорра-ла-Велья', explanation: ''},
    {question: 'Беларусь', answer: 'Минск', explanation: ''},
    {question: 'Бельгия', answer: 'Брюссель', explanation: ''},
    {question: 'Болгария', answer: 'София', explanation: ''},
    {question: 'Босния и Герцеговина', answer: 'Сараево', explanation: ''},
    {question: 'Ватикан', answer: 'Ватикан', explanation: ''},
    {question: 'Великобритания', answer: 'Лондон', explanation: 'Лондон — крупнейший город и столицы Великобритании. Согласно легенде, Лондон был основан Брутом Троянским и назван Troia Nova (с латыни Новая Троя). Однако это предание не подтверждается археологическими раскопками, и считается, что Лондон основали римляне в 43 году н. э.'},
    {question: 'Венгрия', answer: 'Будапешт', explanation: ''},
    {question: 'Германия', answer: 'Берлин', explanation: ''},
    {question: 'Греция', answer: 'Афины', explanation: ''},
    {question: 'Дания', answer: 'Копенгаген', explanation: ''},
    {question: 'Ирландия', answer: 'Дублин', explanation: ''},
    {question: 'Исландия', answer: 'Рейкьявик', explanation: ''},
    {question: 'Испания', answer: 'Мадрид', explanation: 'Мадрид — столица и крупнейший город Испании. Существует немало версий происхождения названия города. Известно, что он упоминается в 939 году под названием Магерит, что происходит, предположительно, от арабского ма́дара «город». Согласно другой версии, название — доарабское, от староиспанского maderita «лесная поросль».'},
    {question: 'Италия', answer: 'Рим', explanation: ''},
    {question: 'Латвия', answer: 'Рига', explanation: ''},
    {question: 'Литва', answer: 'Вильнюс', explanation: ''},
    {question: 'Лихтенштейн', answer: 'Вадуц', explanation: ''},
    {question: 'Люксембург', answer: 'Люксембург', explanation: ''},
    {question: 'Мальта', answer: 'Валлетта', explanation: ''},
    {question: 'Молдова', answer: 'Кишинёв', explanation: ''},
    {question: 'Монако', answer: 'Монако', explanation: ''},
    {question: 'Нидерланды', answer: 'Амстердам', explanation: ''},
    {question: 'Норвегия', answer: 'Осло', explanation: ''},
    {question: 'Польша', answer: 'Варшава', explanation: ''},
    {question: 'Португалия', answer: 'Лиссабон', explanation: ''},
    {question: 'Россия', answer: 'Москва', explanation: ''},
    {question: 'Румыния', answer: 'Бухарест', explanation: ''},
    {question: 'Сан-Марино', answer: 'Сан-Марино', explanation: ''},
    {question: 'Северная Македония', answer: 'Скопье', explanation: ''},
    {question: 'Сербия', answer: 'Белград', explanation: ''},
    {question: 'Словакия', answer: 'Братислава', explanation: ''},
    {question: 'Словения', answer: 'Любляна', explanation: ''},
    {question: 'Украина', answer: 'Киев', explanation: ''},
    {question: 'Финляндия', answer: 'Хельсинки', explanation: ''},
    {question: 'Франция', answer: 'Париж', explanation: ''},
    {question: 'Хорватия', answer: 'Загреб', explanation: ''},
    {question: 'Черногория', answer: 'Подгорица', explanation: ''},
    {question: 'Чехия', answer: 'Прага', explanation: ''},
    {question: 'Швейцария', answer: 'Берн', explanation: ''},
    {question: 'Швеция', answer: 'Стокгольм', explanation: ''},
    {question: 'Эстония', answer: 'Таллин', explanation: ''}
]
// Количество вопросов
const numberOfQuestions = 10
const beforQuestion = 'Столицей государства'
const afterQuestion = 'является город'
// Функция рандома
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Алгоритм Фишера-Йетса (Перешивание)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
// Форма игры
const form = document.querySelector('.form') 

const droppedNumbers = [] // Создание массива для номеров вопросов
while (droppedNumbers.length < numberOfQuestions) { 
    const a = getRandomInt(exercise.length) // Рандомное число А
    if (droppedNumbers.includes(a)) {
    } else {
        droppedNumbers.push(a)
    }
} // Заполнение массива номеров вопросов рандомными неповторяющимися числами

for (let i = 0; i < droppedNumbers.length; i++) {
    q(droppedNumbers[i], i)
}

function q(droppedNumber, index) {
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
    formBlock.setAttribute('data-block', `${index}`)

    const formTitle = document.createElement('h2') // Создание заголовка для вопроса
    formTitle.classList.add('form__title')
    formTitle.textContent = `${beforQuestion} ${que} ${afterQuestion}:`

    const formContent = document.createElement('div')  // Создание блока для ответов
    formContent.classList.add('form__content')

    const formButtons = document.createElement('div') // Создание блока для кнопок
    formButtons.classList.add('form__buttons')

    const formButtonPrev = document.createElement('button') // Создание кнопки назад
    formButtonPrev.classList.add('btn', 'btn-nav', 'btn-prev') 
    formButtonPrev.setAttribute('type', 'button')
    formButtonPrev.setAttribute('data-btn', `${index}`)
    formButtonPrev.textContent = 'Назад'
    
    const formButtonNext = document.createElement('button') // Создание кнопки вперёд
    formButtonNext.classList.add('btn', 'btn-nav', 'btn-next') 
    formButtonNext.setAttribute('type', 'button')
    formButtonNext.setAttribute('data-btn', `${index}`)
    formButtonNext.textContent = 'Следующий вопрос'

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

    formButtons.append(formButtonPrev, formButtonNext)
    formBlock.append(formTitle, formContent, formButtons, formExplanation)
    form.append(formBlock)   
}
const formBlockArray = document.querySelectorAll('.form__block')
for (let i = 0; i < formBlockArray.length; i++) {
    const element = formBlockArray[i];
    if (element.dataset.block === '0') {
        element.classList.add('form__block-active')
    }
}
const btnNavArray = document.querySelectorAll('.btn-nav')
for (let i = 0; i < btnNavArray.length; i++) {
    const btnNav = btnNavArray[i];
    btnNav.addEventListener('click', function () {
        const blockDataID = btnNav.dataset.btn
        if (btnNav.classList.contains('btn-next')) {
            const nextBlockDataID = Number(blockDataID) + 1
            for (let i = 0; i < formBlockArray.length; i++) {
                const formBlock = formBlockArray[i];
                if (formBlock.dataset.block === blockDataID) {
                    formBlock.classList.remove('form__block-active')
                }
                if (formBlock.dataset.block == nextBlockDataID) {
                    formBlock.classList.add('form__block-active')
                }
            }
            
        } 
        if (btnNav.classList.contains('btn-prev')) {
            const prevBlockDataID = Number(blockDataID) - 1
            for (let i = 0; i < formBlockArray.length; i++) {
                const formBlock = formBlockArray[i];
                if (formBlock.dataset.block === blockDataID) {
                    formBlock.classList.remove('form__block-active')
                }
                if (formBlock.dataset.block == prevBlockDataID) {
                    formBlock.classList.add('form__block-active')
                }
            }
        }
    })
}



