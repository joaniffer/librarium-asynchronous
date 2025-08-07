const progressContainer = document.getElementById('progress-bars');

const HOUR_IN_MILLIS = 1000 * 60 * 60;

function getTimeLeft(endDate) {
  const totalHours = Math.round((endDate.valueOf() - Date.now()) / HOUR_IN_MILLIS);

  const hours = totalHours % 24;
  const days = (totalHours - hours) / 24;

  if (days < 1) {
    return "<1 day left";
  }

  return `${days}d ${hours}h left`
}

function createProgressBar(startDate, endDate, label) {
  const singleProgress = document.createElement('div');
  singleProgress.className = 'single-progress-container';

  const notStarted = (startDate.valueOf() - Date.now()) > 0;
  const pastDue = (endDate.valueOf() - Date.now()) < 0;

  const progressLabel = document.createElement('p');
  progressLabel.textContent = label;
  singleProgress.appendChild(progressLabel);

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  singleProgress.appendChild(progressBar);

  if (notStarted) {
    progressBar.classList.add('empty-progress');
    progressBar.textContent = 'not yet started';
    return singleProgress;
  }

  if (pastDue) {
    progressBar.classList.add('past-due');
    progressBar.textContent = 'window has passed';
    return singleProgress;
  }

  progressBar.classList.add('current');

  const progressIndicator = document.createElement('div');
  progressIndicator.className = 'progress-indicator';
  progressBar.appendChild(progressIndicator);

  const timePassed = Date.now() - startDate.valueOf();
  const totalTime = endDate.valueOf() - startDate.valueOf();
  let percentage = ((timePassed / totalTime) * 100).toString();
  percentage = percentage.substring(0, percentage.indexOf('.'));
  progressIndicator.style = `width: ${percentage}%;`;

  if (timePassed / totalTime < 0.5) {
    const amountLeft = document.createElement('p');
    amountLeft.textContent = getTimeLeft(endDate);
    progressBar.appendChild(amountLeft);
  } else {
    progressIndicator.textContent = getTimeLeft(endDate);
  }

  return singleProgress;
}

if (BOOK_DATA) {
  progressContainer.appendChild(createProgressBar(startDate, acquireDueDate, 'Acquire'));
  progressContainer.appendChild(createProgressBar(acquireDueDate, readDueDate, 'Read'));
  progressContainer.appendChild(createProgressBar(readDueDate, discussDueDate, 'Discuss'));
}