export class OrderWidgetChart {
  public static chartData = {
    chart: {
      height: 150,
      type: 'pie',
    },
    dataLabels: {
      enabled: false
    },
    series: [85.7, 47.56],
    colors: ['#d8d8d8', '#ff484c'],
    labels: ['Order', 'New Order'],
    legend: {
      show: false,
    }
  };
}
