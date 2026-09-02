const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

// Function takes in the parameters needed for the constructor, passes them to the const book = new Book () which actually creates the object
// using the object constructor. Then adds the new object to the end of the myLibrary array.
function addBookToLibrary(title, author, pages, read) {
    const book = new Book (title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("Star Wars", "George Lucas", "350", "Yes");
addBookToLibrary("Indiana Jones", "George Lucas and Spielberg", "1980", "No");
addBookToLibrary("Pirates of the Caribbean", "Jack Sparrow", "150", "Yes");

function createTable() {
    const container = document.getElementById("display-table");
    const table = document.createElement("table");
    container.appendChild(table);
}