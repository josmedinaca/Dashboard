export class MemoryUseDashServer {
  public static chartData = {
    chart: {
      height: 490,
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
    colors: ['#ffb74e'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'TOTAL',
      data: [373282401, 429900000, 39350000, 12180000]
    }],
    xaxis: {
      categories: ['Alojamiento', 'Paquetes Alimentarios', 'Almuerzos en alojamiento', 'Transporte'],
    },
    yaxis: {
      title: {
        text: '$'+' COP'
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
        formatter: (val) => '$'+ val.toLocaleString('en') + ' COP'
      }
    }
  };
}
