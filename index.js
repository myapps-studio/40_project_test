const formatDate = (timeInSeconds) => {
    
  time = timeInSeconds;
  hours = Math.floor(time / 60 / 60);
  minutes = Math.floor(time / 60) % 60;
  seconds = Math.floor(time - minutes * 60) % 60;

  if (hours === 0 && minutes === 0) {
      return seconds + 's'; 
  } else if (hours === 0 && seconds === 0) {
      return minutes + 'm';
  } else if (hours === 0) {
      return minutes + 'm '  + seconds + 's';
  } else if (timeInSeconds == null) {
      return '0s';
  } else if (seconds === 0 && minutes === 0) {
    return hours + 'h';
  } else if (seconds === 0) {
    return hours + 'h ' + minutes + 'm';
  } else if (minutes === 0) {
    return hours + 'h ' + seconds + 's';
  } else {
      return hours + 'h ' + minutes + 'm ' + seconds + 's'; 
  }
}
  
  module.exports = formatDate;
