let allData = []; // Хранилище для данных
let filterRubric = 'all';
let filterCategory = 'all';
let filterTag = 'all'; 
let articlesCount = 6;
let searchQuery = '';

const articlesContainer = document.querySelector('.articles')
const contentMore = document.querySelector('.content__more')

// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
searchQuery = urlParams.get('search') || '';
// Если в хедере есть инпут, синхронизируем его текст с поиском из URL
if (searchQuery && searchInput) {
    searchInput.value = searchQuery;
}
// Загружаем данные 
async function init() {
    try {
        const response = await fetch("articles.json");
        allData = await response.json();
        render(); // Первичная отрисовка
        renderTagCloud();
        // ПРОВЕРКА: Если в URL есть поиск, скроллим к результатам
        if (searchQuery) {
            setTimeout(() => {
                document.querySelector('#content')?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }

    } catch (error) {
        console.error("ERROR:", error);
    }
}
// Функция создания HTML 
function getArticleHTML(article) {
    const fullDate = new Date(article.date).toLocaleString('ru-RU', { 
        day: 'numeric', month: 'long', year: 'numeric' 
    });
    
    const rubricMap = {
        projects: { class: 'articles__rubric--project', label: article.rubric_lang },
        stories: { class: 'articles__rubric--story', label: article.rubric_lang },
        facts: { class: 'articles__rubric--fact', label: article.rubric_lang }
    };

    const currentRubric = rubricMap[article.rubric] || { class: '', label: '' };
    
    return `
        <a class="articles__item" href="${article.path}">
            <div class="articles__image">
                <img class="articles__image-img" src="${article.path}${article.img}" alt="">
            </div>
            <div class="articles__rubric ${currentRubric.class}">
                <p class="articles__rubric-text">${currentRubric.label}</p>
            </div>
            <div class="articles__info">
                <p class="articles__category">${article.category}</p>
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

// Основная логика рендера
function render() {
    if (!articlesContainer) return;
    // Фильтрация фильтрация
    const filtered = allData.filter(item => {
        const matchRubric = filterRubric === 'all' || item.rubric === filterRubric;
        const matchCategory = filterCategory === 'all' || item.category.toLowerCase() === filterCategory.toLowerCase();
        const matchTag = filterTag === 'all' || item.tags.includes(filterTag);
        // Безопасная проверка поиска
        const term = searchQuery?.toLowerCase();
        const matchSearch = !term || 
                        item.title.toLowerCase().includes(term) || 
                        item.preview.toLowerCase().includes(term);
        return matchRubric && matchCategory && matchTag && matchSearch;
    });
    // Берем порцию данных
    const part = filtered.slice(0, articlesCount);
    // Отрисовываем всё разом
    articlesContainer.innerHTML = part.map(item => getArticleHTML(item)).join('');
    // Управление кнопкой "Показать еще"
    if (contentMore) {
        contentMore.style.display = (articlesCount >= filtered.length) ? 'none' : 'block';
    }

    renderTagCloud();
}
// Слушатель кнопки "Показать еще"
if (contentMore) {
    contentMore.addEventListener("click", () => {
        articlesCount += 6;
        render();
    });
}

init();


const categoryContainer = document.querySelector('.aside__item--filters');

categoryContainer.addEventListener('change', (e) => {
    // Фильтр РУБРИК
    if (e.target.name === 'rubric') {
        filterRubric = e.target.dataset.filter
        articlesCount = 6;
        render();
    }
    // Фильтр КАТЕГОРИЙ
    if (e.target.name === 'category') {
        filterCategory = e.target.dataset.filter
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
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        filterRubric = 'all';
        filterCategory = 'all';
        filterTag = 'all'; 
        articlesCount = 6;
        searchInput.value = ''; // Очистка визуального поля
        searchQuery = '';
        
        // Сбрасываем визуально все радиокнопки на "Все"
        document.querySelector('#rubric-all').checked = true;
        document.querySelector('#category-all').checked = true;
        
        render();
    });
}



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
