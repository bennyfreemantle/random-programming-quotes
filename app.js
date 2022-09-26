async function getRandomQuote() {
    const URL = 'https://programming-quotes-api.herokuapp.com/quotes/random';
    try {
        let res = await fetch(URL)
        return await res.json();
    } catch(error) {
        console.log(error)
    }
}

async function renderQuote() {
    const randomQuote = await getRandomQuote();
    const container = document.querySelector('.container')
    const quoteText = document.createElement('q')
    const quoteAuthor = document.createElement('p')


    quoteText.textContent = randomQuote.en
    quoteAuthor.textContent = randomQuote.author

    container.appendChild(quoteText)
    container.appendChild(quoteAuthor)
}

renderQuote();