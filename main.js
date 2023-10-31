
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
  
  generateChart();