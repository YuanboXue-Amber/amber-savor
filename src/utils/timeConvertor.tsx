export function convertMinToDisplay (timeInMin: number) {
  let displayTime = '';
  if (timeInMin < 60) {
    displayTime = `${timeInMin}min`;
  } else if (timeInMin < 60*12) {
    displayTime = `${timeInMin%60 === 0 ? (timeInMin/60) : (timeInMin/60).toFixed(1)}h`;
  } else {
    displayTime = 'overnight';
  }
  return displayTime;
}