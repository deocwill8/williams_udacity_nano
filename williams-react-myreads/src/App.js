import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToReady: [],
    read: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
      console.log(books)
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
                      <CurrentlyReading />
                      <WantToRead />
                      <Read />
                    </div>
                  </div> 
                  <div className="open-search">
                  <Link
                    to="/search"
                    >Add a book
                  </Link>
                  </div>
                </div>
      )}>
      </Route>
      <Route path="/search" component={Search}></Route>
      </div>
    )
  }
}

export default BooksApp
