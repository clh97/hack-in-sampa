let year = 2018;
let month = 5;

let cards = [];

const monthField = $('.nav__selectors__select--months')[0];
const yearField = $('.nav__selectors__select--years')[0];

const dateChange = () => {
    month = monthField.value;
    year = yearField.value;
    getNamesFromDate();
}

$(window).ready(() => {
    const card = FinalStructure('dasd', 'bbb', new ContentCard('sdasd', 'aa', 'aa' ), new ContentCard('sdad', 'bb', 'bb' ))
})

const getNamesFromDate = (iMonth = month, iYear = year) => {
    names = [];
    fetch(`https://hack-in-sampa.azurewebsites.net/debito/${iMonth}/${iYear}`).then( r => r.json().then(d => {
        console.log(d)
        d.forEach(i => {
            cards.push(FinalStructure(i.FORNECEDOR, i.DESPESA, new ContentCard('', i.VEREADOR, `R$${i.VALOR}`)))
        })
    }))
}

    FinalStructure = (title, desp, cardOne, cardTwo) => {
        return `
        <article class="main-card">

            <img src="img/left.svg" class="main-card__prev"></img>
            <img src="img/right.svg" class="main-card__next"></img>

            <header class="main-card__header">
                <h2 class="main-card__header__title">${title}</h2>
            </header>

            <h3 class="main-card__content__title"><strong>Despesa:</strong>${desp}</h3>

            <div class="main-card__content">
                <div class="main-card__content__card">
                    <img src="${cardOne.imgSource}" class="card__image">
                    <h2 class="card__title">${cardOne.title}</h2>
                    <h2 class="card__price">${cardOne.price}</h2>
                </div>

                <div class="main-card__content__card">
                    <img src="${cardTwo.imgSource}" class="card__image">
                    <h2 class="card__title">${cardTwo.title}</h2>
                    <h2 class="card__price">${cardTwo.price}</h2>
                </div>
            </div>
            
            <a href="#" class="main-card__share">compartilhar</a>
        </article>
        `;
    }

class ContentCard {
    constructor(imgSource, title, price) {
        this.imgSource = imgSource;
        this.title = title;
        this.price = price;
    }
}
