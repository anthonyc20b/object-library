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

    // Continue creating the table structure by adding the body and appending it to the table element.
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // Loop iterates over each book in the library, creates a row, and adds the row to the table body. Then iterates over each book property (4)
    // and creates a table data cell, updates its text content, and appends it to the table row. j used for readability in nested loop.
    for (let i = 0; i < myLibrary.length; i++){
        const tableRow = document.createElement("tr")
        tbody.appendChild(tableRow);
        
        const bookProperties = [myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read];

        for (let j = 0; j < bookProperties.length; j++){
            const tableCell = document.createElement("td");
            tableCell.textContent = bookProperties[j];
            tableRow.appendChild(tableCell);
        }
    }
}

createTable();

// Creating a "New Book" button that allows the user to complete a form and update the table with their current status
// This takes the id for the new btn, cancel btn, and dialog form and brings them in. Then it listens for the click and opens the modal or closes the modal.
const newBookBtn = document.getElementById("new-book-btn");
const newBookForm = document.getElementById("new-book-form");

function btnModalOpen(event){
    newBookForm.showModal();
}
newBookBtn.addEventListener('click', btnModalOpen);

const newBookCancel = document.getElementById("form-cancel");

function btnModalClose(event){
    newBookForm.close();
}
newBookCancel.addEventListener('click', btnModalClose);

// Now this is the submission based portion, actually taking in the code from the form and running it through our object constructor.
const newBookSubmit = document.getElementById("form-submit")

function formSubmission(event){
    event.preventDefault(); // Prevents the form from looking for a server.
    
    const newTitle = document.getElementById("title").value; // .value used to get the actual value of title, not just the title element for ex.
    const newAuthor = document.getElementById("author").value;
    const newPages = document.getElementById("pages").value;
    const newRead = document.querySelector("input[name='read']:checked").value; // Need to select based of name attrubute due to multiple radio btn optns.

    addBookToLibrary(newTitle, newAuthor, newPages, newRead); // Input the new form values into the object constructor.
    newBookForm.close(); // Close the modal window.
}

const newForm = document.getElementById("new-form");
newForm.addEventListener('submit', formSubmission); // Link the form button to the form itself.