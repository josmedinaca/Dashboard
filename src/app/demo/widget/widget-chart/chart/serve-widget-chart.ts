export class ServeWidgetChart {
  public static chartData = {
    chart: {
      height: 210,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    colors: ['#cccccc', '#cccccc', '#cccccc', '#cccccc', '#cccccc', '#7ad835', '#7ad835'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded'
      }
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    series: [{
      data: [21, 22, 10, 16, 21, 13, 28]
    }],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: ['#cccccc', '#cccccc', '#cccccc', '#cccccc', '#cccccc', '#7ad835', '#7ad835'],
          fontSize: '14px'
        }
      },
      axisBorder: {
        show: false,
      },
    }
  };
}
