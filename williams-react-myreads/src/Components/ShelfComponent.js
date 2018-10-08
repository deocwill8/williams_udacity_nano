import React, { Component } from 'react'
import BookComponent from './BookComponent'

class ShelfComponent extends Component {
    componentDidMount(){
        console.log(this.props)
      }
  
  render() {
      return (
              <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookShelfDescription}</h2>
                <div className="bookshelf-books">
                  <ol className='books-grid'>
                      {this.props.books.map((book) => (
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