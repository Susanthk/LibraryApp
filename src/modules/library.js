export default class Library {

    constructor(){
        this.Library = []
        //Library.push(bk1)
    }

    addBook(book){
        this.Library.push(book)
    }

    displayBooks(){
        return this.Library
    }

}