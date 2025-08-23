BOOKS
  // .filter(findBookByDateCondition((_, end) => now > end))
  .sort((a, b) => a < b ? -1 : 1)
  .forEach(book => {
    const pane = document.createElement('div');
    pane.className = 'pane';
    document.getElementById('main-content').appendChild(pane);

    const bookTitle = document.createElement('p');
    bookTitle.className = 'past-title';
    bookTitle.textContent = book.title;
    pane.appendChild(bookTitle);
  });

