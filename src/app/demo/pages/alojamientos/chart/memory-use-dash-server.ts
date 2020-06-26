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
    colors: ['#ffb74e', '#fe365f', '#4782fa'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'Total estudiantes apoyados',
      data: [3017,3017,3017,3017,3017]
    }, {
      name: 'Total estudiantes hombres',
      data: [1781,3017,3017,3017,3017]
    }, {
      name: 'Total estudiantes mujeres',
      data: [1236,3017,3017,3017,3017]
    }
  ],
    xaxis: {
      categories: ['Rockefeller', 'CRU', 'HIJAS DEL CORAZON', 'MARIA INMACULADA', 'SOLERIUM'],
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
