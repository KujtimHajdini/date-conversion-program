// Create a Date object for the current date and time
const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

// Format a Date object to M/D/YYYY with prefix
function formatDateMMDDYYYY(date) {
  // Get month (0-11, so add 1), no padding
  const month = date.getMonth() + 1;
  // Get day of the month, no padding
  const day = date.getDate();
  // Get full year (4 digits)
  const year = date.getFullYear();
  // Return formatted string with prefix
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

function formatDateLong(date){
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `Formatted Date (Month Day, Year): ${month} ${day}, ${year}`;
}