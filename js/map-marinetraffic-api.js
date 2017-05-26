var xhr = new XMLHttpRequest();
var answer;
var latitude;
var longitude;

xhr.open('GET', 'https://services.marinetraffic.com/api/exportvessel/v:5/77dcc23ab58188d483cb146749c7955da18e10fc/timespan:20/protocol:json/mmsi:229441000', true);

xhr.send();  

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else {
    console.log(xhr.responseText);
    answer = xhr.responseText.split(',');
    latitude = parseFloat(answer[1].slice(1));
    longitude = parseFloat(answer[2].slice(1));
  }
// responseText example
//jsono  [{"MMSI":"229441000","LAT":"1.368217","LON":"103.543600","SPEED":"0","HEADING":"345","COURSE":"0","STATUS":"5","TIMESTAMP":"2017-04-19T15:22:52","DSRC":"TER"}]

//json [["229441000", "1.368267", "103.543500", "1", "345",       "0","5","2017-04-19T13:28:53","TER"]]
//MMSI        LAT         LON        SPEED  HEADING COURSE STATUS TIMESTAMP           DSRC
}

//google api key AIzaSyC9XC2Mrcc_WtsrTm_TaZbtEGEYljczgCQ


