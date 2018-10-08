import React, { Component } from 'react'

class Read extends Component {

  handSelectionChange = (book) => {
    console.log(book)
  }

  
  render() {
      return (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className='books-grid'>
                      {this.props.allBooks.map((book) => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                              <div className="book-shelf-changer">
                              <select onChange={this.handSelectionChange(book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {/* figure out how to access array containing the authors name */}
                            <div className="book-authors">Harper Lee</div>
                          </div>
                        </li> 
                      ))}
                    </ol>
                </div>
              </div>
      )
  }
}

export default Read

// render() {
//   return (
//           <div className="bookshelf">
//             <h2 className="bookshelf-title">Read</h2>
//             <div className="bookshelf-books">
//               <ol className="books-grid">
//                 <li>
//                   <div className="book">
//                     <div className="book-top">
//                       <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
//                       <div className="book-shelf-changer">
//                         <select>
//                           <option value="move" disabled>Move to...</option>
//                           <option value="currentlyReading">Currently Reading</option>
//                           <option value="wantToRead">Want to Read</option>
//                           <option value="read">Read</option>
//                           <option value="none">None</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="book-title">The Hobbit</div>
//                     <div className="book-authors">J.R.R. Tolkien</div>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="book">
//                     <div className="book-top">
//                       <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
//                       <div className="book-shelf-changer">
//                         <select>
//                           <option value="move" disabled>Move to...</option>
//                           <option value="currentlyReading">Currently Reading</option>
//                           <option value="wantToRead">Want to Read</option>
//                           <option value="read">Read</option>
//                           <option value="none">None</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="book-title">Oh, the Places You'll Go!</div>
//                     <div className="book-authors">Seuss</div>
//                   </div>
//                 </li>
//                 <li>
//                   <div className="book">
//                     <div className="book-top">
//                       <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
//                       <div className="book-shelf-changer">
//                         <select>
//                           <option value="move" disabled>Move to...</option>
//                           <option value="currentlyReading">Currently Reading</option>
//                           <option value="wantToRead">Want to Read</option>
//                           <option value="read">Read</option>
//                           <option value="none">None</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="book-title">The Adventures of Tom Sawyer</div>
//                     <div className="book-authors">Mark Twain</div>
//                   </div>
//                 </li>
//               </ol>
//             </div>
//           </div>
//   )
// }