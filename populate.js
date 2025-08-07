/**
 * Creates a display date for the end of the current cycle (one day before start of next)
 * @param {Date} date the start date of the next cycle
 * @returns a X/X/XX string
 */
function formatDisplayDueDate(date) {
  const displayDate = new Date(date);
  displayDate.setDate(displayDate.getDate() - 1);
  const displayYear = displayDate.getFullYear().toString().substring(2);

  return `${displayDate.getMonth()+1}/${displayDate.getDate()}/${displayYear}`;
}

let startDate, acquireDueDate, readDueDate, discussDueDate;

if (BOOK_DATA) {
  document.getElementById('book-title').textContent = BOOK_DATA.title;
  document.getElementById('book-author').textContent = `by ${BOOK_DATA.author}`;

  startDate = new Date(`${BOOK_DATA.startDate}T00:00:00.000${TIMEZONE_OFFSET}`);
  acquireDueDate = addWeeks(ACQUIRE_WEEKS, startDate);
  readDueDate = addWeeks(READ_WEEKS, acquireDueDate);
  discussDueDate = addWeeks(DISCUSS_WEEKS, readDueDate);

  const dueDateElems = document.querySelectorAll('.due-date p:last-child');
  dueDateElems[0].textContent = formatDisplayDueDate(acquireDueDate);
  dueDateElems[1].textContent = formatDisplayDueDate(readDueDate);
  dueDateElems[2].textContent = formatDisplayDueDate(discussDueDate);

  const bookLinkElems = document.querySelectorAll('#book-links .book-link');
  bookLinkElems[0].href = BOOK_DATA.goodreadsLink;
  bookLinkElems[1].href = BOOK_DATA.storygraphLink;

  document.getElementById('thoughts-form').href = BOOK_DATA.thoughtsFormLink;
} else {
  document.getElementById('book-title').textContent = 'None selected';

  document.querySelectorAll('.due-date p:last-child').forEach(elem => {
    elem.textContent = 'TBD';
  });

  const bookLinkElems = document.querySelectorAll('#book-links .book-link');
  bookLinkElems[0].href = 'https://www.goodreads.com/';
  bookLinkElems[1].href = 'https://app.thestorygraph.com/';

  document.getElementById('thoughts-form').remove();
}
