export class TaskDashStatistics {
  public static chartData = {
    chart: {
      height: 455,
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
      strokeColors: ['#7ad835', '#4886ff'],
      hover: {
        size: 3
      }
    },
    colors: ['#7ad835', '#4886ff'],
    series: [
      {
        name: 'Estudiantes apoyados',
        data: [174, 1028, 1379]
      },
      {
        name: 'PACS',
        data: [269, 1777, 2253]
      }
    ],
    grid: {
      borderColor: '#eee'
    },
    xaxis: {
      categories: ['Abril', 'Mayo', 'Junio'],
    }
  };
}
