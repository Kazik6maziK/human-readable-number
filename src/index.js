module.exports = function toReadable (number) {
  const oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
  const elevenTonineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensese = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let resalt = ''

  if (number < 10) {
    resalt = oneToNine[number];
  } else if (number < 20) {
    resalt = elevenTonineteen[number - 10];
  } else if (number < 100) {
    resalt = `${tensese[Math.floor(number / 10)]} ${number % 10 > 0 ? toReadable(number % 10) : ''}`;
  } else if (number < 1000) {
    resalt = `${oneToNine[Math.floor(number / 100)]} hundred ${number % 100 > 0 ? toReadable(number % 100) : ''}`;
  }

  return resalt.trim();
}

