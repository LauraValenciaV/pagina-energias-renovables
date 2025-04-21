const ctx = document.getElementById('myChart');

fetch('../data/json/wind-generation.json')

.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})

.then(function(data){
     const selectedCountries = ['Argentina', 'Germany', 'Brazil', 'Canada', 'China', 'Colombia']; 
     const year = 2021;
 
     const filtered = data.filter(row => 
       row.Year === year && selectedCountries.includes(row.Entity)
     );
 
     createChart(filtered, 'bar');
});


function createChart(data,type){
  new Chart(ctx, {
    type: type,
    data: {
      labels: data.map(row => row.Entity),
      datasets: [{
        label: 'Electricity from Wind (TWh) in 2021',
        data: data.map (row => row["Electricity from wind (TWh)"]),
        backgroundColor: 'rgba(255, 94, 0, 0.6)',
        borderColor: 'rgb(255, 143, 109)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: 'Inter',  // Cambiar la fuente de los ticks del eje Y
              size: 14,         // Tamaño de la fuente
              weight: 'bold',   // Grosor de la fuente
            }
          },
          title: {
            display: false,
            text: 'Electricity from Wind (TWh)',  // Título del eje Y
            font: {
              family: 'Inter',
              size: 16,
              weight: 'normal'
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: 'Inter',  // Cambiar la fuente de los ticks del eje X
              size: 14,
              weight: 'regular',
            }
          },
          title: {
            display: false,
            text: 'Countries',  // Título del eje X
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'Inter',  // Cambiar la fuente de las etiquetas de la leyenda
              size: 14,
              weight: 'regular',
            }
          }
        },
        title: {
          display: true,
          text: 'Wind Power Generation in 2021 by Country',  // Título del gráfico
          font: {
            family: 'Inter',
            size: 24,
            weight: 'medium'
          }
        }
      },
      maintainAspectRatio: false
    }
  });

}

const ctx2 = document.getElementById('myChart2');

fetch('../data/json/solar-energy-consumption.json')
  .then(function(response){
      if(response.ok == true){
          return response.json();
      }
  })
  .then(function(data){
      const selectedCountries = ['Argentina', 'Germany', 'Brazil', 'Canada', 'China', 'Colombia']; 
      const year = 2021;

      const filtered = data.filter(row => 
        row.Year === year && selectedCountries.includes(row.Entity)
      );

      createChart2(filtered, 'bar');
  });

function createChart2(data, type){
  new Chart(ctx2, {
    type: type,
    data: {
      labels: data.map(row => row.Entity),
      datasets: [{
        label: 'Electricity from Solar (TWh) in 2021',
        data: data.map(row => row["Electricity from solar (TWh)"]),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'bold',
            }
          },
          title: {
            display: false,
            text: 'Electricity from Solar (TWh)',
            font: {
              family: 'Inter',
              size: 16,
              weight: 'normal'
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          },
          title: {
            display: false,
            text: 'Countries',
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          }
        },
        title: {
          display: true,
          text: 'Solar Power Generation in 2021 by Country',
          font: {
            family: 'Inter',
            size: 24,
            weight: 'medium'
          }
        }
      },
      maintainAspectRatio: false
    }
  });
}

const ctx3 = document.getElementById('myChart3');

fetch('../data/json/hydropower-consumption.json')
  .then(function(response){
      if(response.ok == true){
          return response.json();
      }
  })
  .then(function(data){
      const selectedCountries = ['Argentina', 'Germany', 'Brazil', 'Canada', 'China', 'Colombia']; 
      const year = 2021;

      const filtered = data.filter(row => 
        row.year === year && selectedCountries.includes(row.entity)
      );

      createChart3(filtered, 'bar');
  });

function createChart3(data, type){
  new Chart(ctx3, {
    type: type,
    data: {
      labels: data.map(row => row.entity),
      datasets: [{
        label: 'Electricity from Hydropower (TWh) in 2021',
        data: data.map(row => row.electricityFromHydroTWh),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'bold',
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          }
        },
        title: {
          display: true,
          text: 'Hydropower Consumption in 2021 by Country',
          font: {
            family: 'Inter',
            size: 24,
            weight: 'medium'
          }
        }
      },
      maintainAspectRatio: false
    }
  });
}

const ctx4 = document.getElementById('myChart4');

fetch('../data/json/biofuel-production.json')
  .then(function(response){
    if(response.ok === true){
      return response.json();
    }
  })
  .then(function(data){
    const selectedCountries = ['Argentina', 'Germany', 'Brazil', 'Canada', 'China', 'Colombia']; 
    const year = 2021;

    const filtered = data.filter(row => 
      row.Year === year && selectedCountries.includes(row.Entity)
    );

    createChart4(filtered, 'bar');
  });

function createChart4(data, type){
  new Chart(ctx4, {
    type: type,
    data: {
      labels: data.map(row => row.Entity),
      datasets: [{
        label: 'Biofuel Production (TWh) in 2021',
        data: data.map(row => row.BiofuelsProductionTWhTotal),
        backgroundColor: 'rgba(102, 187, 106, 0.6)',   // verde
        borderColor: 'rgba(102, 187, 106, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'bold',
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          }
        },
        title: {
          display: true,
          text: 'Biofuel Production in 2021 by Country',
          font: {
            family: 'Inter',
            size: 24,
            weight: 'medium'
          }
        }
      },
      maintainAspectRatio: false
    }
  });
}

const ctx5 = document.getElementById('myChart5');

fetch('../data/json/installed-geothermal-capacity.json')
  .then(function(response){
    if(response.ok === true){
      return response.json();
    }
  })
  .then(function(data){
    const selectedCountries = [
        'Germany', 'China', 'Iceland', 'Kenya', 'Mexico',
        'Indonesia', 'Italy', 'Japan', 'USA', 'Philippines'
      ];
    const selectedYear = 2020;

    const filtered = data.filter(row => 
      row.Year === selectedYear && selectedCountries.includes(row.Entity)
    );

    createChart5(filtered, 'bar');
  });

function createChart5(data, type){
  new Chart(ctx5, {
    type: type,
    data: {
      labels: data.map(row => row.Entity),
      datasets: [{
        label: 'Installed Geothermal Capacity (MW) in 2020',
        data: data.map(row => row['Geothermal Capacity']),
        backgroundColor: 'rgba(255, 152, 0, 0.6)',
        borderColor: 'rgba(255, 152, 0, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'bold',
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: 'Inter',
              size: 12,
              weight: 'regular',
            },
            maxRotation: 90,
            minRotation: 45
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              family: 'Inter',
              size: 14,
              weight: 'regular',
            }
          }
        },
        title: {
          display: true,
          text: 'Installed Geothermal Capacity in 2020 by Country',
          font: {
            family: 'Inter',
            size: 24,
            weight: 'medium'
          }
        }
      },
      maintainAspectRatio: false
    }
  });
}


