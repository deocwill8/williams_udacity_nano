import React, { Component } from 'react'

class FilteredBookComponent extends Component {
    componentDidMount(){
        //console.log('Book' ,this.props)
    } 

    render() {
      return (
        <div className="book">
        <div className="book-top">
            {/* ideal for templating the image url came from Udacity mentor Ryan Waite's YouTube walk through: https://www.youtube.com/watch?v=acJHkd6K5kI&t=4s */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""})`}}></div>
            <div className="book-shelf-changer">
            <select value={this.props.book.shelf || "none"}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
             </div>
         </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(" ") : ""}</div>
        </div>
      )
    }
}

export default FilteredBookComponent