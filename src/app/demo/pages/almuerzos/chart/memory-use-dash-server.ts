export class MemoryUseDashServer {
  public static chartData = {
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%'
      },
    },
    dataLabels: {
      enabled: true
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
    colors: [ '#fe365f', '#4782fa'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'Total Almuerzos hombres',
      data: [1781]
    }, {
      name: 'Total Almuerzos mujeres',
      data: [1236]
    }
  ],
    xaxis: {
      categories: ['Almuerzos entregados'],
    },
    yaxis: {
      title: {
        text: ' (almuerzos)'
      }
    },
    fill: {
      opacity: 1

    },
    grid: {
      borderColor: '#ccc',
      strokeDashArray: 3
    },
    tooltip: {
      y: {
        formatter: (val) => val + ' '
      }
    }
  };
}
