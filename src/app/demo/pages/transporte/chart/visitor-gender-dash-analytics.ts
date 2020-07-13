export class VisitorGenderDashAnalytics {
  public static chartData = {
    chart: {
      height: 300,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    labels: ['0-5', '6-10', '11-15','16+'],
    series: [260, 42, 7,3],
    legend: {
      show: false
    },
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    colors: ['#008FFB', '#00E396', '#FEB019','#FF4560', '#775DD0', '#546E7A','#26a69a', '#ffcc00', '#99ffcc','#ffcccc','#666699'],
  };
}
