const ACQUIRE_WEEKS = 1;
const READ_WEEKS = 4;
const DISCUSS_WEEKS = 1;

const BOOKS = [{
  title: 'Too Like the Lightning',
  author: 'Ada Palmer',
  goodreadsLink: 'https://www.goodreads.com/book/show/26114545-too-like-the-lightning',
  storygraphLink: 'https://app.thestorygraph.com/books/572afb0a-f275-47d2-a2e4-e66dc70b6d08',
  startDate: '2025-07-13',
  thoughtsFormLink: 'https://forms.gle/sMZ6bQ5gKJnVDDnc7'
}];

function addWeeks(numWeeks, date) {
  const daysToAdd = numWeeks * 7;
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

const now = new Date();
const TIMEZONE_OFFSET = `-0${now.getTimezoneOffset()/60}:00`;

const BOOK_DATA = BOOKS.find(book => {
  const bookStart = new Date(`${book.startDate}T00:00:00.000${TIMEZONE_OFFSET}`);
  const bookEnd = addWeeks(ACQUIRE_WEEKS + READ_WEEKS + DISCUSS_WEEKS, bookStart);

  return now >= bookStart && now < bookEnd;
});

