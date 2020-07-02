export class MemoryUseDashServer2 {
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
    colors: ['#fe365f', '#4782fa'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [ {
      name: 'Total estudiantes hombres',
      data: [105]
    }, {
      name: 'Total estudiantes mujeres',
      data: [75]
    }
  ],
    xaxis: {
      categories: ['Estudiantes beneficiados'],
    },
    yaxis: {
      title: {
        text: ' (beneficiarios)'
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
        formatter: (val) => val + ' beneficiarios'
      }
    }
  };
}
