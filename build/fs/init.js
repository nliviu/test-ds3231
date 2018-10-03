load('api_ds3231.js');

let addr = 0x68;
let ds = DS3231.create(addr);
let dateTime = ds.read();
let year = dateTime.getYear();
let month = dateTime.getMonth();
let day = dateTime.getDay();
let hour = dateTime.getHour();
let minute = dateTime.getMinute();
let second = dateTime.getSecond();
print(JSON.stringify(year) + '/' + JSON.stringify(month) + '/' + JSON.stringify(day)
        + ' ' + JSON.stringify(hour) + ':' + JSON.stringify(minute) + ':' + JSON.stringify(second));
dateTime.free();
ds.free();

