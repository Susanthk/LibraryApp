
let body = document.querySelector("body");
let library = []
function addBook() {
    
}

function books (author, title, pages){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = true
}
books.prototype.showBook = function(){
    console.log(this.author, this.title, this.pages, this.read)
}

function addBook(){
    let author = body.querySelector("#author").value
    let title = body.querySelector("#title").value
    let pages = body.querySelector("#pages").value
    
    
    let bk = new books(author, title, pages)
    bk.showBook()
    library.push(bk)
    listBooks()
}

function listBooks(){
    console.log(library)
    for (bk in library){
        library[bk].showBook()
    }
}

function isEmpty(str) {
    return !str.trim().length;
}

console.log(library)

document.getElementById("added").addEventListener("click", addBook)

