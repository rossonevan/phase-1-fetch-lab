function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // Fetch is being used to get information from the API
  // API repsonds with a response
  return fetch("https://anapioficeandfire.com/api/books")
  // We convert the response into json
  .then((resp) => resp.json())
  // The translation which is "json" parameter
  // an object containing the information from the link that we fected from
  // Inside of this 2nd .then, we want to do stuff with our information
  .then((json) => {
    renderBooks(json);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
