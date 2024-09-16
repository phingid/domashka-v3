import PageButton from "./classes/PageButton.js";

const API = 'https://rickandmortyapi.com/api';
const wrapper = document.getElementById('wrapper');
const charactersActions = document.getElementById('charactersActions');


class Character {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.gender = data.gender;
        this.imageURL = data.image;
    }

    getHTML() {
        return `
            <div class="characters__card">
                <img src="${this.imageURL}"/>
                <div class="characters__info">
                    <p class="characters__id">ID: ${this.id}</p>
                    <h2 class="characters__name">${this.name}</h2>
                    <p class='characters__status'>${this.status}<p>
                    <p class='characters__gender'>${this.gender}<p>
                <div>
            </div>
        `;
    }
}

(async () => {
    const characters = `${API}/character`;
    const response = await fetch(`${characters}`).then(responce => responce.json());
    const pages = response.info.pages;

    for (let i = 1; i <= pages; i++) {
        const button = new PageButton(i);
        charactersActions.innerHTML += button.getHTML();
    }

    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            wrapper.innerHTML = '';
            let responseCorrected = await fetch(`${characters}/?page=${button.innerHTML}`).then(responseCorrected => responseCorrected.json());
            responseCorrected.results.forEach(character => {
                const characterFormatted = new Character(character);
                wrapper.innerHTML += characterFormatted.getHTML();                                                                                                                                                                                                                                                                                                                                         
            })
        });
    });
})()


