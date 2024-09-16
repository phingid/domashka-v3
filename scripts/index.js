import PageButton from "./classes/PageButton.js";
import Character from "./classes/Character.js";

const API = 'https://rickandmortyapi.com/api';
const wrapper = document.getElementById('wrapper');
const charactersActions = document.getElementById('charactersActions');

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


