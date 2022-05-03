traverse shelf array
if shelf array includes any of the shelf results
add the shelf property of the shelf book to the search book

searchArr.forEach(searchBook => {
if (shelfArr.find((shelfBook) => shelfBook.id === searchBook.id){
searchBook.shelf = searchBook.shelf
}
} )
