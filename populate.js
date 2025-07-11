document.getElementById('book-title').textContent = BOOK_DATA.title;
document.getElementById('book-author').textContent = `by ${BOOK_DATA.author}`;

function addWeeks(numWeeks, date) {
  const daysToAdd = numWeeks * 7;
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

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

const now = new Date();
const timezoneOffset = `-0${now.getTimezoneOffset()/60}:00`;
const startDate = new Date(`${BOOK_DATA.startDate}T00:00:00.000${timezoneOffset}`);
const acquireDueDate = addWeeks(1, startDate);
const readDueDate = addWeeks(3, acquireDueDate);
const discussDueDate = addWeeks(1, readDueDate);

const dueDateElems = document.querySelectorAll('.due-date p:last-child');
dueDateElems[0].textContent = formatDisplayDueDate(acquireDueDate);
dueDateElems[1].textContent = formatDisplayDueDate(readDueDate);
dueDateElems[2].textContent = formatDisplayDueDate(discussDueDate);
