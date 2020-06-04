export class RevenueDailyWidgetChart {
  public static chartData = {
    chart: {
      type: 'bar',
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4886ff'],
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    series: [{
      data: [9, 5, 7, 8, 3, 2, 1]
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
