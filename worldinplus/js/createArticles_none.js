import { articlesArray } from '/plusworld/js/articles.js'
const articles = document.querySelector('.articles')

function createArticle(articles, articleElem) {
    const article = document.createElement('div')
    article.classList.add('article')
    const title = document.createElement('h2')
    title.innerText = articleElem.title
    const text = document.createElement('p')
    text.innerText = articleElem.text
    const img = document.createElement('img')
    img.setAttribute('src', articleElem.img)
    const category = document.createElement('p')
    category.innerText = articleElem.category
    const rubric = document.createElement('p')
    rubric.innerText = articleElem.rubric
    const tegs = document.createElement('div')
    for (let i = 0; i < articleElem.tegs.length; i++) {
        const teg = articleElem.tegs[i];
        tegs.append(`#${teg} `)
    }
    article.append(title, text, img, category, rubric, tegs)
    articles.append(article)
}


function createRubric(){
    for (let i = 0; i < articlesArray.length; i++) {
        const articleElem = articlesArray[i];
        if (articleElem.rubric === 'project') {
            createArticle(articles, articleElem) 
        }
    }
}
createRubric()