export default class Character {
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