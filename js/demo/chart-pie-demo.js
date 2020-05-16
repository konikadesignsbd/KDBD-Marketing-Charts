// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [ "SOGO Enterprice", "KAS Sowdagor Traders", "Sunca Enterprice", "Konika Designs BD", "YUTAI", "PAK Fan", "Panash Food", "GFC Fan"],
    datasets: [{
      data: [10 , 10 , 8, 8,  5, 2, 2],
      backgroundColor: ['#A0522D', '#808080', '#DC143C', '#FFA500', '#00CED1', '#008000', '#00BFFF', '#6A5ACD' ],
      hoverBackgroundColor: ['#8B4513', '#696969', '#B22222', '#FF8C00', '#20B2AA', '#006400', '#1E90FF', '#483D8B' ],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10, 
    },
    legend: {
      display: false
    },
    cutoutPercentage: 70,
  },
});
