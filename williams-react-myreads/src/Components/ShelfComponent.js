import React, { Component } from 'react'
import BookComponent from './BookComponent'

class ShelfComponent extends Component {
  
  render() {
      return (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className='books-grid'>
                      {this.props.allBooks.map((book) => (
                        <li key={book.id}>
                            <BookComponent />
                        </li> 
                      ))}
                    </ol>
                </div>
              </div>
      )
  }
}

export default ShelfComponent