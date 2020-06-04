export class NewUsersWidgetChart {
  public static chartData = {
    chart: {
      type: 'bar',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#7ad835', '#7ad835', '#7ad835', '#7ad835', '#7ad835', '#CCCCCC', '#CCCCCC'],
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: true
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
