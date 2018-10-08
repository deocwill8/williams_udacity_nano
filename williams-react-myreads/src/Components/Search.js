import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'



class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      bookMatches: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateBookMatches = this.updateBookMatches.bind(this)
  }

  handleChange = (query) => {
    this.setState({ searchQuery: query.trim() })
    this.updateBookMatches(query)
  }

  updateBookMatches = (query) => {
    BooksAPI.search(query).then((result) => {
      this.setState({bookMatches: result})
    })
    console.log(this.state.bookMatches)
  }
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                placeholder="Search by title or author"
                value={this.state.searchQuery}
                onChange={(event) => this.handleChange(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.bookMatches.map((searchedBook) => (
                    <li key={searchedBook.id}>
                      <div className="book">
                        <div className="book-top">
                            {/* ideal for templating the image url came from Udacity mentor Ryan Waite's YouTube walk through: https://www.youtube.com/watch?v=acJHkd6K5kI&t=4s */}
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${searchedBook.imageLinks.thumbnail})`}}></div>
                            <div className="book-shelf-changer">
                            <select value={searchedBook.shelf || "none"}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                             </div>
                         </div>
                        <div className="book-title">{searchedBook.title}</div>
                        {/* make this more readable */}
                        {/* <div className="book-authors">{searchedBook.authors.map(author => author)}</div> */}
                        </div>
                      </li>
                  ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search