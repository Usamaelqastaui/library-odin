const container = document.querySelector('#container');

let myLibrary = [
    {   "name" : 'book1',
        "author" : ' author1',
        "pages" : 200,
        "read" : false
    },{
        "name" : 'book2',
        "author" : ' author2',
        "pages" : 300,
        "read" : true  
    }
];

function Book(name, author, pages, read = false) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  let book = new Book(name, author, pages, read);
  myLibrary.push(book);
}

function viewBooks(){
    addBookToLibrary('book3', 'author3', 399, true);
    addBookToLibrary('book4', 'author4', 399);
    myLibrary.forEach((book)=>{
        console.table(book);
        createCard(book);
        // for (let prop in book){
        //     console.log(book[prop]);
        // }
    })
}

function createCard(book){
    let bookCard = document.createElement('div');
    let bookName = document.createElement('h3');
    let bookAuthor = document.createElement('h3');
    let bookPages = document.createElement('p');
    let readStatus = document.createElement('p');

    bookName.textContent = book['name'];
    bookAuthor.textContent = book['author'];
    bookPages.textContent = book['pages'];
    readStatus.textContent = (book['read'])? 'Read': 'Did not read';

    bookCard.appendChild(bookName);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readStatus);

    bookCard.classList.add('card');

    container.appendChild(bookCard);
}
viewBooks();