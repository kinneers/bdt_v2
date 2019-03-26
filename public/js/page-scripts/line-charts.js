(function ($) {
  $(document).ready(function(){
    
    var cardLegendLine = $("#card-legend-line-chart");
    var cardLegendLineChart = new Chart(cardLegendLine, {
      type: 'line',
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: 'Behavior 1',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'rgb(244,67,54)',
          pointBackgroundColor: 'rgb(244,67,54)',
          pointBorderColor: 'rgba(244,67,54,.1)',
          lineTension: 0,
          pointStyle: 'circle',
          fill: false
        },{
          label: 'Behavior 2',
          data: [14, 4, 8, 5, 7, 11],
          borderColor: 'rgb(33,150,243)',
          pointBackgroundColor: 'rgb(33,150,243)',
          pointBorderColor: 'rgba(33,150,243,.1)',
          lineTension: 0,
          pointStyle: 'circle',
          fill: false,
          // hidden: true
        }]
      },
      options: {
        hover: {
          mode: 'index',
          intersect: false
        },
        legendCallback: cardLegendCallback
      }
    })
    cardLegendLine.closest('.card-content').before($(cardLegendLineChart.generateLegend()));


  });
}( jQuery ));
