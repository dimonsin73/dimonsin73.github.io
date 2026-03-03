async function loadArticles() {
    try {
        const response = await fetch("articles.json");
        if (!response.ok) {
            throw new Error("Ошибка загрузки: " + response.status);
        }
        const data = await response.json();
        createGridArticles(data)
    } catch (error) {
      console.error("Ошибка:", error);
    }
}
loadArticles();

const articles = document.querySelector(".articles")

function createArticle(articles, article) {
    const articlesItem = document.createElement("a")
    articlesItem.classList.add("articles__item")
    articlesItem.setAttribute("href", `${article.path}`)
    const image = document.createElement("div")
    image.classList.add("articles__image")
    const img = document.createElement("img")
    img.classList.add("articles__image-img")
    img.setAttribute("src", article.img)
    image.append(img)
    const rubric = document.createElement("div")
    rubric.classList.add("articles__rubric")
    const rubricText = document.createElement("p")
    rubricText.classList.add("articles__rubric-text")
    switch (article.rubric) {
        case "projects":
            rubric.classList.add("articles__rubric_project")
            rubricText.innerText = "Проекты"
            break;
        case "stories":
            rubric.classList.add("articles__rubric_story")
            rubricText.innerText = "Истории"
            break;
        case "facts":
            rubric.classList.add("articles__rubric_fact")
            rubricText.innerText = "Факты"
            break;
        default:
            break;
    }
    rubric.append(rubricText)
    const articlesInfo = document.createElement("div")
    articlesInfo.classList.add("articles__info")
    const category = document.createElement("p")
    category.classList.add("articles__category")
    category.innerText = article.category
    const title = document.createElement("h2")
    title.classList.add("articles__title")
    title.innerText = article.title
    const preview = document.createElement("p")
    preview.classList.add("articles__preview")
    preview.innerText = article.preview
    const tegs = document.createElement("div")
    tegs.classList.add("articles__tegs")
    for (let i = 0; i < article.tegs.length; i++) {
        const teg = document.createElement("p") 
        teg.classList.add("articles__teg")
        teg.innerText = `#${article.tegs[i]}`
        tegs.append(teg)
    }
    const articleDate = new Date(article.date)
    const fullDate = articleDate.toLocaleString('ru-RU', { 
        day: 'numeric', 
        month: 'long',
        year: 'numeric'
    });
    const date = document.createElement("p")
    date.classList.add("articles__date")
    date.innerText = fullDate
    articlesInfo.append(category, title, preview, tegs, date)
    articlesItem.append(image, rubric, articlesInfo)
    articles.append(articlesItem)
}
function createGridArticles(data) {
    for (let i = 0; i < data.length; i++) {
        const article = data[i];
        createArticle(articles, article)    
    }
}
