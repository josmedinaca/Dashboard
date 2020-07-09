export class TaskDashStatistics {
  public static chartData = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    legend: {
      fontSize: '14px',
      position: 'top',
      horizontalAlign: 'left',
      markers: {
        width: 14,
        height: 14,
        radius: 2
      },
      itemMargin: {
        horizontal: 0,
        vertical: 8
      }
    },
    markers: {
      size: 1.5,
      strokeColors: ['#7ad835', '#4886ff', '#ffb74e'],
      hover: {
        size: 3
      }
    },
    colors: ['#7ad835', '#4886ff', '#ffb74e'],
    series: [
      {
        name: 'Hombres',
        data: [712, 462]
      },
      {
        name: 'Mujeres',
        data: [588, 284]
      },
      {
        name: 'Total',
        data: [1300, 746]
      }
    ],
    grid: {
      borderColor: '#eee'
    },
    xaxis: {
      categories: ['Fase 1', 'Fase 2'],
    }
  };
}
