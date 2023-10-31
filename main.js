// async function makeGetRequest(path) {
//     await fetch(path)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             return data;
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }

function generateChart() {
    // Simulate fetching or generating data dynamically
    const dataCat = [
    { category: 'Before Optimization', heating: 30, hvac: 45 },
    { category: 'After Optimization', heating: 20, hvac: 25 },
];
    var labels = dataCat.map(d => d.category);
    var dataset1Data = dataCat.map(p => p.heating);
    var dataset2Data = dataCat.map(c=> c.hvac);
  
    var data = {
      labels: labels,
      datasets: [
        {
          label: "Heating Cost",
          data: dataset1Data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        //   barPercentage: 0.5,
        //   categoryPercentage: 1
        },
        {
          label: "HVAC Cost",
          data: dataset2Data,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        //   barPercentage: 0.5,
        //   categoryPercentage: 1
        }
      ]
    };
  
    // Create the chart
    var ctx = document.getElementById("myChart").getContext("2d");
  
    window.myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Cost in Eur (X100)',
                color: 'black', // Customize the title color
                font: {
                  size: 12, // Customize the title font size
                },
                padding: {
                  top: 10, // Adjust the top padding
                },
              }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: "top"
          },
          title: {
            display: true,
            text: "Before and After Comparison of Cost and Consumption",
            position: "top",
            font:{
                size:18
            }
          }
        }
      }
    });
  }

  // const res = makeGetRequest('https://fair-ruby-bat-slip.cyclic.app/multiSensorData?count=10');
  // console.log(res);
  generateChart();
  
  // function createLineGraph(value) {
    // const dataValue = {
    //     labels: res.dateTime,
    //     datasets: [
    //       {
    //         label: 'Temperature',
    //         data: res.temperature,
    //         borderColor: 'rgb(75, 192, 192)',
    //         fill: false
    //       },
    //       {
    //         label: 'Brightness',
    //         data: res.brightness,
    //         borderColor: 'rgb(255, 99, 132)',
    //         fill: false
    //       }
    
    //     ]
    //   };
  // }
  // const ctx = document.getElementById('lineChart').getContext('2d');
    
  //     const myLineChart = new Chart(ctx, {
  //       type: 'line',
  //       data: dataValue,
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false
  //       }
  //     });
  //     window.lineChart = myLineChart;
 
  // function createLineChart(data) {
  //   const ctx = document.getElementById('lineChart').getContext('2d');
  
  //   const chartData = {
  //     labels: data.dateTime[0],
  //     datasets: [
  //         {
  //           label: 'Temperature',
  //           data: data.temperature[0],
  //           borderColor: 'rgb(75, 192, 192)',
  //           fill: false
  //         },
  //         {
  //           label: 'Brightness',
  //           data: data.brightness[0],
  //           borderColor: 'rgb(255, 99, 132)',
  //           fill: false
  //         }
  //     ]
  //   };
  
  //   new Chart(ctx, {
  //     type: 'line',
  //     data: chartData,
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //     },
  //   });
  // }
  
  // function fetchDataAndCreateChart() {
  //   fetch('https://fair-ruby-bat-slip.cyclic.app/multiSensorData?count=10')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       createLineChart(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }
  
  // // Call the function to fetch data and create the chart
  // fetchDataAndCreateChart();

//   const data = {
//     labels: ["2023-10-31T12:34:05Z","2023-10-31T12:33:05Z","2023-10-31T12:32:04Z","2023-10-31T12:31:04Z","2023-10-31T12:30:05Z","2023-10-31T12:29:05Z","2023-10-31T12:28:05Z","2023-10-31T12:27:04Z","2023-10-31T12:26:04Z","2023-10-31T12:25:05Z"],
//     datasets: [
//         {
//             label: 'Temperature',
//             data: [21.9,23,22,21.4,21.5,21.7,22.5,23.2,22.4,23.7],
//             borderColor: 'rgb(75, 192, 192)',
//             fill: false,
//         },
//         {
//             label: 'Brightness',
//             data: [229,237,240,239,235,233,232,234,234,239],
//             borderColor: 'rgb(255, 99, 132)',
//             fill: false,
//         },
//     ],
// };

var speedCanvas = document.getElementById("myLineChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Temperature",
    data: [21.9,23,22,21.4,21.5,21.7,22.5,23.2,22.4,23.7],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var dataSecond = {
    label: "Brightness",
    data: [229,237,240,239,235,233,232,234,234,239],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

var speedData = {
  labels: ["2023-10-31T12:34:05Z","2023-10-31T12:33:05Z","2023-10-31T12:32:04Z","2023-10-31T12:31:04Z","2023-10-31T12:30:05Z","2023-10-31T12:29:05Z","2023-10-31T12:28:05Z","2023-10-31T12:27:04Z","2023-10-31T12:26:04Z","2023-10-31T12:25:05Z"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
