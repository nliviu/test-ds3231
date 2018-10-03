load('api_timer.js');
load('api_ds3231.js');

function format2Digits(n) {
  let val = JSON.stringify(n);
  let ret = '';
  if (n < 10) {
    ret = '0' + val;
  } else {
    ret = val;
  }
  return ret;
}

function timerCB(arg) {
  let addr = 0x68;
  let ds = DS3231.create(addr);
  let dateTime = ds.read();
  let year = dateTime.getYear();
  let month = dateTime.getMonth();
  let day = dateTime.getDay();
  let hour = dateTime.getHour();
  let minute = dateTime.getMinute();
  let second = dateTime.getSecond();
  print(JSON.stringify(year) + '/' + format2Digits(month) + '/' + format2Digits(day)
          + ' ' + format2Digits(hour) + ':' + format2Digits(minute) + ':' + format2Digits(second));
  dateTime.free();
  ds.free();
}

Timer.set(10000 /* 10 sec */, Timer.REPEAT /* repeat */, timerCB, null);

