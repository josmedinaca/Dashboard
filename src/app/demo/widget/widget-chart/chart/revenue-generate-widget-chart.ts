export class RevenueGenerateWidgetChart {
  public static chartData = {
    chart: {
      type: 'bar',
      height: 150,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fa7d03'],
    plotOptions: {
      bar: {
        columnWidth: '25%'
      }
    },
    series: [{
      data: [150, 335, 240, 200, 275, 205, 170, 150]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
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
          formatter: (seriesName) => {
            return 'Amount Spent :';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
}
