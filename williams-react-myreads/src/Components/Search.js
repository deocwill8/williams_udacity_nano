import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import FilteredBookComponent from './FilteredBookComponent';



class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      bookMatches: [],
      hasError: false
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
      console.log(result)
    }).catch((error) => {
      console.log(error)
      this.setState({ hasError: true })
    })
    console.log(this.state)
  }

  render() {
        return (
          <div>
            {this.state.hasError ? (
              <h1>No results found</h1>
            ) : (
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
              )}

            </div>
          ) 
    }
}

export default Search

// render() {
//   if(this.state.hasError == true) {
//     return <h1>No results found</h1>
//   } else {
//     return (
//       <div className="search-books">
//       <div className="search-books-bar">
//         <Link className="close-search" to="/">Close</Link>
//         <div className="search-books-input-wrapper">
//           <input type="text" 
//           placeholder="Search by title or author"
//           value={this.state.searchQuery}
//           onChange={(event) => this.handleChange(event.target.value)}
//           />
//         </div>
//       </div>
//       <div className="search-books-results">
//         <ol className="books-grid">
//             {this.state.bookMatches.map((searchedBook) => (
//               <li key={searchedBook.id}>
//                 <FilteredBookComponent book={searchedBook} />
//               </li>
//             ))}
//         </ol>
//       </div>
//     </div>
//   )
//   }
// }