import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import ShelfComponent from './ShelfComponent'
import Search from './Search'

class BooksApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }

    this.changeShelf = this.changeShelf.bind(this)
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
      console.log(books)
      this.setState({ books })
    })
  }

  changeShelf(updatedBook, newShelf){
    console.log([updatedBook])
    updatedBook.shelf = newShelf
    BooksAPI.update(updatedBook, newShelf)
    .then(resp => {
      console.log(resp) //array of objects
      this.setState(state => ({
        books: state.books.filter(currentBook => currentBook.id !== updatedBook.id).concat([updatedBook])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ShelfComponent bookShelfDescription="Currently Reading" onChange={this.changeShelf} books={this.state.books.filter(book => book.shelf === "currentlyReading")} />
                <ShelfComponent bookShelfDescription="Want to Read" onChange={this.changeShelf} books={this.state.books.filter(book => book.shelf === "wantToRead")} /> 
                <ShelfComponent bookShelfDescription="Read" onChange={this.changeShelf} books={this.state.books.filter(book => book.shelf === "read")} />
              </div>
            </div> 
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}>
      </Route>
      <Route path="/search" render={() => (
        <Search onChange={this.changeShelf} books={this.state.books}></Search>
      )}>
      </Route>
    </div>
    )
  }
}
export default BooksApp

