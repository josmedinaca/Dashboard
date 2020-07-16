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
    labels: ['ND', '0-10', '11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100'],
    series: [27, 1831, 780,182,127,64,45,26,10,6,10],
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
