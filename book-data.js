const BOOKS = [{
  title: 'Too Like the Lightning',
  author: 'Ada Palmer',
  goodreadsLink: 'https://www.goodreads.com/book/show/26114545-too-like-the-lightning',
  storygraphLink: 'https://app.thestorygraph.com/books/572afb0a-f275-47d2-a2e4-e66dc70b6d08',
  startDate: '2025-07-13',
  thoughtsFormLink: 'https://forms.gle/sMZ6bQ5gKJnVDDnc7',
  acquireWeeks: 1,
  readWeeks: 4,
  discussWeeks: 1,
  averageRating: 3.25,
  percentFirst: '40%',
  percentSecond: '40%'
},{
  title: 'Assassin\'s Apprentice',
  author: 'Robin Hobb',
  startDate: '2025-08-24',
  goodreadsLink: 'https://www.goodreads.com/book/show/77197.Assassin_s_Apprentice?from_search=true&from_srp=true&qid=1Hv0u3X11Y&rank=1',
  storygraphLink: 'https://app.thestorygraph.com/books/6521029d-f234-4a6c-b44c-f433359cdf21',
  thoughtsFormLink: 'https://forms.gle/QjUd5HVUsxgV3qCn8',
  acquireWeeks: 1,
  readWeeks: 4,
  discussWeeks: 1
}];

function addWeeks(numWeeks, date) {
  const daysToAdd = numWeeks * 7;
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

const now = new Date();
const TIMEZONE_OFFSET = `-0${now.getTimezoneOffset()/60}:00`;

const findBookByDateCondition = (condition) => (book) => {
  const bookStart = new Date(`${book.startDate}T00:00:00.000${TIMEZONE_OFFSET}`);
  const bookEnd = addWeeks(
    book.acquireWeeks + book.readWeeks + book.discussWeeks, 
    bookStart
  );

  return condition(bookStart, bookEnd);
};

const findCurrentBookCondition = (start, end) => now >= start && now < end;
const findNextBookCondition = (start) => now < start;

const BOOK_DATA = BOOKS.find(findBookByDateCondition(findCurrentBookCondition));
const UP_NEXT = BOOKS.find(findBookByDateCondition(findNextBookCondition));

