var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://services.marinetraffic.com/api/exportvessel/v:5/77dcc23ab58188d483cb146749c7955da18e10fc/timespan:20/protocol:jsono/mmsi:229441000', true);

xhr.send(); // (1)

xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    alert(xhr.responseText);
  }

}