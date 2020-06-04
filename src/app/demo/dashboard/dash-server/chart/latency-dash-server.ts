export class LatencyDashServer {
  public static chartData = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ffb74e'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [45, 43, 42, 35, 30, 45, 40, 50, 45, 40, 35, 45, 35, 40, 50, 45, 40, 35,
        30, 35, 42, 35, 30, 45, 60, 50, 45, 40, 35, 45, 40, 35, 30, 35, 42]
    }],
    yaxis: {
      min: 25,
      max: 70
    },
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    grid: {
      borderColor: '#eee'
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
}
