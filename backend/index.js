const time = '12:33PM';

function convertTo24HrsFormat(time) {
  // write your solution here
  if (!time) return;

  let format = '';

  const [hour, min] = time.split(':') || '';

  const pmam = min.slice(min.length - 2);

  const minFormat =
    min.replace(pmam, '').length > 1 ? min.replace(pmam, '') : `0${min.replace(pmam, '')}`;

  const hourSingle = hour.length > 1 ? '0' : '';

  if (pmam === 'PM') {
    format = `${hourSingle}${+hour === 12 ? hour : +hour + 12}:${minFormat}`;
  } else {
    format = `${hourSingle}${+hour === 12 ? '00' : hour}:${minFormat}`;
  }

  return format;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
