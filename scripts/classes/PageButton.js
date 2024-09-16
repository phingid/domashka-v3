export default class PageButton {
    constructor(data) {
        this.pageNumber = data; 
    }

    getHTML() {
        return `<button class="button">${this.pageNumber}</button>`;
    }
}