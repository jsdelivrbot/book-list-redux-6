import React, {Component} from 'react'
import {connect} from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
      )
    })
  }

  render() {
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
    }
  }

function mapStateToProps(state){
    //whatever is returned will show p as props inside of book list-group
    return {
      books: state.books //this is connection
  }
}

export default connect(mapStateToProps)(BookList)
