export function selectBook(book) {
  // selectBook is an Action Creator, it nees to return an actions
  // an object with a type property
  return {
    type: 'BOOK_SELECTED', //Action Creator always contains type. Uppercase, usually a string
    payload: book //usually has a payload
  };
}
