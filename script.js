const container = document.querySelector('#container');
const newBook = document.querySelector('#new');
const submitBtn = document.querySelector('#submit');

function openForm() {
    document.getElementById("addForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("addForm").style.display = "none";
  }

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

    //Since no Storage Used, this acts as a reload/refresh.
    container.innerHTML = ' ';

    myLibrary.forEach((book)=>{
        createCard(book);
    })
}

function createCard(book){
    let bookCard = document.createElement('div');
    let bookName = document.createElement('h1');
    let bookAuthor = document.createElement('h3');
    let bookPages = document.createElement('p');
    let readStatus = document.createElement('p');
    let removeBook = document.createElement('button');

    bookCard.setAttribute('data-index',myLibrary.indexOf(book));
    removeBook.setAttribute('id','remove');

    removeBook.addEventListener('click',(e)=>{
        let bookIndex = e.target.parentNode.dataset.index
        myLibrary.splice(bookIndex, 1);
        viewBooks();
    });

    removeBook.textContent = 'Remove From List'
    bookName.textContent = book['name'];
    bookAuthor.textContent = `By ${book['author']}` ;
    bookPages.textContent = `${book['pages']} pages` ;
    readStatus.textContent = (book['readStatus'] === 'yes')? 'Read': 'Did not read';

    bookCard.appendChild(bookName);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(removeBook);


    bookCard.classList.add('card');

    container.appendChild(bookCard);
}

newBook.addEventListener('click',(e)=>{
    openForm();
})



document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((memo, pair) => ({
        ...memo,
        [pair[0]]: pair[1],
      }), {});
    console.log(data);
    myLibrary.push(data);
    createCard(data);
    closeForm();
  });

window.addEventListener('load',(e)=>{
    viewBooks();
});