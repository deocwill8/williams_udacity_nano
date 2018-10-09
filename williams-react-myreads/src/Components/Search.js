import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import FilteredBookComponent from './FilteredBookComponent';



class Search extends Component {
  componentDidMount(){
    console.log('Search' ,this.props)
} 
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      bookMatches: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateBookMatches = this.updateBookMatches.bind(this)
    console.log(this.state)
  }

  handleChange = (query) => {
    this.setState({ searchQuery: query.trim() })
    this.updateBookMatches(query)
  }

  updateBookMatches = (query) => {
    /*idea to check if anything was actually in the field 
    this particular way came from : https://www.youtube.com/watch?v=i6L2jLHV9j8
    around 2:07:00 */
    //check if anything is in the input field 
    if(query.length > 0) {
      BooksAPI.search(query).then((result) => {
        console.log(result)
        //check if query matches any of the results 
        if(result.error){
          this.setState({bookMatches: []})
        } else {
          this.setState({bookMatches: result})
        }
      })
    } else {
      this.setState({bookMatches: []})
    }

  }

  render() {
        return (
          <div>
              <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
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
                              <FilteredBookComponent book={searchedBook} />
                            </li>
                          ))}
                        </ol>
                      </div>
                </div>
            </div>
          ) 
    }
}

export default Search