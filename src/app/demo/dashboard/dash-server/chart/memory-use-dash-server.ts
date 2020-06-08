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
      enabled: false
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
      name: 'TOTAL',
      data: [102, 2046, 2717, 5]
    }, {
      name: 'MUJERES',
      data: [54, 872, 1172, 2]
    }, {
      name: 'HOMBRES',
      data: [48, 1174, 1545, 3]
    }],
    xaxis: {
      categories: ['Alojamiento', 'Paquetes Alimentarios', 'Almuerzos en alojamiento', 'Transporte'],
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
