
//// All the metric code for part 1

// First Metric Map
 var map;
      function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
          center:new google.maps.LatLng(37.773972, -122.431297),
                // latitude/longitude of San Francisco 
                zoom:12,
        });

      

      // Loop through the results array and place a marker for each
      // set of coordinates.
        for (var i = 0; i < data.length; i++) {
          var lat = data[i].latitude;
          var long = data[i].longitude;
          var latLng = new google.maps.LatLng(lat,long);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      };
      

//Second Metric Doughnut/some circular thing
  // num per call type

var callTime = {'Non Life-threatening':0, 'Potentially Life-Threatening':1 , 'Alarm':2 , 'Fire':3 }
var callTimeAvg = [0,0,0,0]
var dates = [];
for(var i = 13; i < 25; i++){
  dates.push("1-"+i+"-18");
}
var dateNumCalls = [0,0,0,0,0,0,0,0,0,0,0]
//calculate times + find average for each call type
for (var i = 0; i < data.length; i++) {

    var date = data[i].received_timestamp;
    date = date.substring(0,date.lastIndexOf(":")+3);
    data[i].received_timestamp = date;
    //alert(date);
    var start = moment(date);
    data[i].start = start;

    dateNumCalls[start.date()-13] += 1;


    var date2 = data[i].on_scene_timestamp;
    date2 = date2.substring(0,date2.lastIndexOf(":")+3);
    data[i].received_timestamp = date2;

    var end = moment(date2);
    data[i].end = end;

    var timeDiff = moment.utc(end.diff(start)).format("HH:mm:ss");
    data[i]["timeDiff"] = timeDiff;


    var group = callTime[data[i].call_type_group];
    callTimeAvg[group] += 1;
}



new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ['Non Life-threatening', 'Potentially Life-Threatening' , 'Alarm' , 'Fire'],
      datasets: [
        {
          label: "1/13/18 - 1/24/18",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: callTimeAvg
        }
      ]
    },
    options: {
      title: {
        display: true,
      }
    }
});

//Third Metric Time Series
//num of calls per day




var ctx = document.getElementById('chartCanvas').getContext('2d');
var newdata = {
    // Labels should be Date objects
    labels: dates,
    datasets: [{
        fill: false,
        label: 'Total calls',
        data:  dateNumCalls,
        borderColor: '#fe8b36',
        backgroundColor: '#fe8b36',
        lineTension: 0,
    }]
}


var options = {
    type: 'line',
    data: newdata,
    options: {
        fill: false,
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Date",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Total calls",
                }
            }]
        }
    }
}
const newchart = new Chart(ctx, options);


var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});



