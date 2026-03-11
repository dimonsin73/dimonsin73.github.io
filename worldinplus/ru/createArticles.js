let allData = []; // Хранилище для данных
let filterRubric = 'all';
let filterCategory = 'all';
let filterTag = 'all'; 
let articlesCount = 6;

const articlesContainer = document.querySelector(".articles");
const contentMore = document.querySelector(".content__more");

// 1. Загружаем данные ОДИН раз
async function init() {
    try {
        const response = await fetch("articles.json");
        allData = await response.json();
        render(); // Первичная отрисовка
        renderTagCloud(allData);
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
}
// 2. Функция создания HTML 
function getArticleHTML(article) {
    const fullDate = new Date(article.date).toLocaleString('ru-RU', { 
        day: 'numeric', month: 'long', year: 'numeric' 
    });
    
    const rubricMap = {
        projects: { class: 'articles__rubric--project', label: 'Проекты' },
        stories: { class: 'articles__rubric--story', label: 'Истории' },
        facts: { class: 'articles__rubric--fact', label: 'Факты' }
    };
    const categoryMap = {
        all: "Все",
        ecology: "Экология",
        science: "Наука",
        society: "Общество",
        technologies: "Технологии",
        health: "Здоровье"
    };

    const currentRubric = rubricMap[article.rubric] || { class: '', label: '' };
    const categoryLabel = categoryMap[article.category] || article.category;

    return `
        <a class="articles__item" href="${article.path}">
            <div class="articles__image">
                <img class="articles__image-img" src="${article.path}${article.img}" alt="">
            </div>
            <div class="articles__rubric ${currentRubric.class}">
                <p class="articles__rubric-text">${currentRubric.label}</p>
            </div>
            <div class="articles__info">
                <p class="articles__category">${categoryLabel}</p>
                <h2 class="articles__title">${article.title}</h2>
                <p class="articles__preview">${article.preview}</p>
                <div class="articles__tags">
                    ${article.tags.map(tag => `<button type="button" class="articles__tag" data-tag="${tag}">#${tag}</button>`).join('')}
                </div>
                <p class="articles__date">${fullDate}</p>
            </div>
        </a>
    `;
}

// 3. Основная логика рендера
function render() {
    // Двойная фильтрация: по рубрике И по категории
    const filtered = allData.filter(item => {
        const matchRubric = filterRubric === 'all' || item.rubric === filterRubric;
        const matchCategory = filterCategory === 'all' || item.category.toLowerCase() === filterCategory.toLowerCase();
        const matchTag = filterTag === 'all' || item.tags.includes(filterTag);
        return matchRubric && matchCategory && matchTag;;
    });
    // Берем порцию данных
    const part = filtered.slice(0, articlesCount);
    // Отрисовываем всё разом
    articlesContainer.innerHTML = part.map(item => getArticleHTML(item)).join('');
    // Управление кнопкой "Показать еще"
    contentMore.style.display = (articlesCount >= filtered.length) ? 'none' : 'block';
    renderTagCloud();
}
// Слушатель кнопки "Показать еще"
contentMore.addEventListener("click", () => {
    articlesCount += 6;
    render();
});

init();


const categoryContainer = document.querySelector('.aside__item--filters');

categoryContainer.addEventListener('change', (e) => {
    // Фильтр РУБРИК
    if (e.target.name === 'rubric') {
        filterRubric = e.target.id.replace('rubric-', '');
        articlesCount = 6;
        render();
    }
    // Фильтр КАТЕГОРИЙ
    if (e.target.name === 'category') {
        filterCategory = e.target.id.replace('category-', '');
        articlesCount = 6;
        render();
    }
});
// Слушаем клики по всей основной области (делегирование)
document.addEventListener('click', (e) => {
    // Если кликнули по тегу (в сайдбаре или в карточке)
    const tagBtn = e.target.closest('.aside__tag') || e.target.closest('.articles__tag');
    
    if (tagBtn) {
        e.preventDefault(); 
        e.stopPropagation();
        // Достаем текст тега (убираем решетку #)
        const rawTag = tagBtn.innerText.replace('#', '').trim();
        
        // Если кликнули по уже активному тегу — сбрасываем фильтр
        filterTag = (filterTag === rawTag) ? 'all' : rawTag;
        
        articlesCount = 6;
        render();
        
        // Скролл к контенту для удобства
        document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
    }
});

// Добавим также логику для кнопки "Сбросить фильтры"
const resetBtn = document.querySelector('.aside__reset');
resetBtn.addEventListener('click', () => {
    filterRubric = 'all';
    filterCategory = 'all';
    filterTag = 'all'; 
    articlesCount = 6;
    
    // Сбрасываем визуально все радиокнопки на "Все"
    document.querySelector('#rubric-all').checked = true;
    document.querySelector('#category-all').checked = true;
    
    render();
});

function renderTagCloud() {
    const tagsContainer = document.querySelector('.aside__tags');
    if (!tagsContainer) return;

    // Собираем все теги в один массив
    const allTags = allData.flatMap(article => article.tags);
    // Оставляем только уникальные и берем топ-15
    const uniqueTags = [...new Set(allTags)].slice(0, 15);

    tagsContainer.innerHTML = `
        ${uniqueTags.map(tag => `
            <button type="button" class="aside__tag ${filterTag === tag ? 'aside__tag--active' : ''}" data-tag="${tag}">
                #${tag}
            </button>
        `).join('')}
    `;
}