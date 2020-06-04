export class PageViewsWidgetChart {
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
    colors: ['#fa7d03', '#fa7d03', '#fa7d03', '#fa7d03', '#fa7d03', '#CCCCCC', '#CCCCCC'],
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: true
      }
    },
    series: [{
      data: [5, 2, 7, 4, 3, 2, 6]
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
