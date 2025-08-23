BOOKS
  .filter(findBookByDateCondition((_, end) => now > end))
  .sort((a, b) => a.startDate < b.startDate ? 1 : -1)
  .forEach(book => {
    const pane = document.createElement('div');
    pane.className = 'pane';
    document.getElementById('main-content').appendChild(pane);

    const bookName = document.createElement('div');
    bookName.className = 'past-name';
    pane.appendChild(bookName);

    const bookTitle = document.createElement('p');
    bookTitle.className = 'past-title';
    bookTitle.textContent = book.title;
    bookName.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'past-author';
    bookAuthor.textContent = `by ${book.author}`;
    bookName.appendChild(bookAuthor);

    pane.appendChild(document.createElement('hr'));

    const rating = document.createElement('p');
    rating.className = 'rating';
    rating.textContent = `Our average rating: ${book.averageRating}/5`;
    pane.appendChild(rating);

    const votes = document.createElement('div');
    votes.className = 'votes';
    pane.appendChild(votes);

    const firstChoice = document.createElement('p');
    firstChoice.textContent = `1st choice: ${book.percentFirst}`;
    votes.appendChild(firstChoice);

    const secondChoice = document.createElement('p');
    secondChoice.textContent = `2nd choice: ${book.percentSecond}`;
    votes.appendChild(secondChoice);

    const links = document.createElement('div');
    links.className = 'links';
    pane.appendChild(links);

    const goodreadsLink = document.createElement('a');
    goodreadsLink.target = '_blank';
    goodreadsLink.rel = 'noopener noreferrer';
    goodreadsLink.textContent = 'Goodreads';
    goodreadsLink.href = book.goodreadsLink;
    links.appendChild(goodreadsLink);

    const storygraphLink = document.createElement('a');
    storygraphLink.target = '_blank';
    storygraphLink.rel = 'noopener noreferrer';
    storygraphLink.textContent = 'Storygraph';
    storygraphLink.href = book.storygraphLink;
    links.appendChild(storygraphLink);
  });

