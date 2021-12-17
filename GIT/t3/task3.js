function LibraryBook (_title, _year, _author) {
  let title = _title
  let year = _year
  let author = _author
  let readerName = null
  let readerDate = null
  function giveTheBook ( client, date = new Date() ) {
    this.readerName = client
    this.readerDate = date
  }
  this.getBookInfo = function () {
    let text = readerName ? 'выдана' : 'в наличии'
    console.info( ${_title}, ${_year}, ${_author}, ${text} )
  }
  this.getTheBook = function (client) {
    readerName === null ? giveTheBook(client) : 'выдана'
  }
  this.returnBook = function () {
    readerName = null
    readerDate = null
  }
}
