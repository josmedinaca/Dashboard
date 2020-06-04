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
        data: [50, 130, 80, 70, 180, 105, 250]
      },
      {
        name: 'Mujeres',
        data: [80, 100, 60, 200, 150, 100, 150]
      },
      {
        name: 'Total',
        data: [130, 230, 140, 270, 330, 205, 400]
      }
    ],
    grid: {
      borderColor: '#eee'
    },
    xaxis: {
      categories: ['Fase 1', 'Fase 2', 'Fase 3', 'Fase 4', 'Fase 5', 'Fase 6', 'Fase 7'],
    }
  };
}
