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
    // Bring in the container, create the table element, add the table to the container.
    const container = document.getElementById("display-table");
    const table = document.createElement("table");
    container.appendChild(table);

    // Now we are creating the table structure itself, the header, rows, columns, etc. Linking each using appendChild to create the nesting structure.
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);

    // Loop over each header name, create a header element, update the text content to the current name, and add it to the headerRow.
    const headerNames = ["title", "author", "pages", "read"];
    for (let i = 0; i < headerNames.length; i++){
        const headerItem = document.createElement("th")
        headerItem.textContent = headerNames[i];
        headerRow.appendChild(headerItem);
    }

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
}