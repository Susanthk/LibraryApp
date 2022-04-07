import Book from "./book.js";
import Library from "./library.js";
const library = new Library();
let content = document.querySelector("#content")
export default class UI{

    static loadHomepage(){
        
        let header = UI.createHeader()
        let inputDiv = UI.createBookInput()

        content.appendChild(header)
        content.appendChild(inputDiv)
        

        //let button = document.querySelector("#inputButton")
        //button.addEventListener("click", UI.getUserInput)

        //let viewBooksButton = document.querySelector("#viewBooks")
        //viewBooksButton.addEventListener("click", UI.bookDisplay)

    }

    static getUserInput() {
        console.log("adding")
        let bookName = document.getElementById("bookInput").value
        
        let author = document.getElementById("authorInput").value
        let pages = document.getElementById("pagesInput").value
        let checkbox = document.querySelector(".ckbx").checked
        UI.clearInputs()
        let bk = new Book(bookName, author, pages, checkbox)

        library.addBook(bk)
    }

    static clearInputs(){
        let bookName = document.getElementById("bookInput")
        let author = document.getElementById("authorInput")
        let pages = document.getElementById("pagesInput")
        let checkbox = document.querySelector(".ckbx")

        bookName.value = ""
        author.value = ""
        pages.value = ""
        checkbox.checked = false
    }

    static createHeader(){
        let header = document.createElement("h1")
        header.setAttribute("id", "websiteHeading")
        header.innerText = "Welcome to the Library!"
        return header
    }

    
    static createBookDisplay(bk){

        let bkdiv = document.createElement("div")
        bkdiv.classList.add("bkdiv")

        let book = document.createElement("h4")
        bkdiv.setAttribute("id","book")
        book.innerText = bk.title

        let author = document.createElement("p")
        author.setAttribute("id", "author")
        author.innerText = `By ${bk.author}`

        let pages = document.createElement("p")
        pages.setAttribute("id", "pages")
        pages.innerText = `Pages: ${bk.pages}`

        let read = document.createElement("p")
        if (bk.read == false){
            read.innerText = "Not Read"
        } else {
            read.innerText = "Read"
        }

        let checkbox = document.createElement("button")
        checkbox.setAttribute("id", "ckButton")
        if (bk.read){
            checkbox.innerText = "Not Read"
        } else {
            checkbox.innerText = "Read"
        }
        
        
        checkbox.addEventListener("click", (e) => {
            if (bk.read == false){
                bk.read = true
                read.innerText = "Read"
                checkbox.innerText = "Not Read"
            } else {
                bk.read = false
                read.innerText = "Not Read"
                checkbox.innerText = " Read"
            }
        } )

        bkdiv.appendChild(book)
        bkdiv.appendChild(author)
        bkdiv.appendChild(pages)
        bkdiv.appendChild(read)
        bkdiv.appendChild(checkbox)
        return bkdiv


    }

    static clearDisplay(){
        let bookDiv = document.querySelector(".bkContainer")
        while(bookDiv.firstChild){
            bookDiv.removeChild(bookDiv.firstChild)
        }
    }
    static bookDisplay()
    {
        
        let bookDiv = document.createElement("div")
        bookDiv.classList.add("bkContainer")
        
        console.log(content.contains(bookDiv))
        if(document.querySelector(".bkContainer")){
            let temp = document.querySelector(".bkContainer")
            temp.remove()
        }

        
        let collection = library.displayBooks()

        collection.forEach(element => {
            let bk = UI.createBookDisplay(element)
            bookDiv.appendChild(bk)
        })
        console.log(bookDiv.firstChild)

        content.appendChild(bookDiv)

    }





    static createBookInput(){
        //book
        let book = document.createElement("input")
        book.type = 'text'
        book.placeholder = "Book"
        book.setAttribute("id", "bookInput")
        book.classList.add("bkInput")
     
        //author
        let author = document.createElement("input")
        author.type = 'text'
        author.placeholder = "Author"
        author.setAttribute("id", "authorInput")
        author.classList.add("bkInput")

        //pages
        let pages = document.createElement("input")
        pages.type = 'text'
        pages.placeholder = "pages"
        pages.setAttribute("id", "pagesInput")
        pages.classList.add("bkInput")

        //Checkbox div
        let checkbox = document.createElement("div")
        checkbox.setAttribute("id", "checkboxDiv")
        let checkboxText = document.createElement("p")
        checkboxText.classList.add("ckbxElement")
        checkboxText.innerText = "Read?"

        let read = document.createElement("input")
        read.classList.add("ckbxElement")
        read.setAttribute("class", "ckbx")
        read.type = "checkbox"
        read.classList.add("bkInput")
        checkbox.appendChild(checkboxText)
        checkbox.appendChild(read)

        // input button
        let button = document.createElement("button")
        button.setAttribute("id", "inputButton")
        button.innerText = "Add"
        button.addEventListener("click", UI.getUserInput)

        let inputDiv = document.createElement("div")
        inputDiv.classList.add("inputDiv")

        let viewBooksButton = document.createElement("button")
        viewBooksButton.setAttribute("id", "viewBooks")
        viewBooksButton.innerText = "View Books"
        viewBooksButton.addEventListener("click", UI.bookDisplay)
        
        inputDiv.appendChild(book)
        inputDiv.appendChild(author)
        inputDiv.appendChild(pages)
        inputDiv.appendChild(checkbox)
        inputDiv.appendChild(button)
        inputDiv.appendChild(viewBooksButton)
        return inputDiv
    }

    

}