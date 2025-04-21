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

const ctx6 = document.getElementById('myChart6');

fetch('../data/json/share-electricity-renewables.json')
  .then(response => response.ok && response.json())
  .then(data => {
    const selectedCountries = ['Germany', 'China', 'Brazil', 'Canada', 'USA'];
    const selectedYear = 2021;

    const filtered = data.filter(row => 
      row.Year === selectedYear && selectedCountries.includes(row.Entity)
    );

    new Chart(ctx6, {
      type: 'doughnut',
      data: {
        labels: filtered.map(row => row.Entity),
        datasets: [{
          label: 'Renewables (% electricity) in 2021',
          data: filtered.map(row => row['Renewables (% electricity)']),
          backgroundColor: [
            '#66bb6a', '#42a5f5', '#ffca28', '#ef5350', '#ab47bc'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Share of Renewables in Electricity (2021)',
            font: {
              family: 'Inter',
              size: 20,
              weight: 'medium'
            }
          },
          legend: {
            labels: {
              font: {
                family: 'Inter',
                size: 14
              }
            }
          }
        },
        maintainAspectRatio: false
      }
    });
  });


  const ctx7 = document.getElementById('myChart7');

  fetch('../data/json/share-electricity-wind.json')
    .then(response => response.ok && response.json())
    .then(data => {
      const selectedCountries = ['Germany', 'China', 'Brazil', 'Canada', 'USA'];
      const selectedYear = 2021;

      const filtered = data.filter(row => 
        row.Year === selectedYear && selectedCountries.includes(row.Entity)
      );

      new Chart(ctx7, {
        type: 'doughnut',
        data: {
          labels: filtered.map(row => row.Entity),
          datasets: [{
            label: 'Wind (% electricity) in 2021',
            data: filtered.map(row => row['Wind (% electricity)']),
            backgroundColor: [
              '#4fc3f7', '#aed581', '#f06292', '#ba68c8', '#ffb74d'
            ]
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Share of Wind in Electricity (2021)',
              font: {
                family: 'Inter',
                size: 20,
                weight: 'medium'
              }
            },
            legend: {
              labels: {
                font: {
                  family: 'Inter',
                  size: 14
                }
              }
            }
          },
          maintainAspectRatio: false
        }
      });
    });


    const ctx8 = document.getElementById('myChart8');

    fetch('../data/json/share-electricity-solar.json')
      .then(response => response.ok && response.json())
      .then(data => {
        const selectedCountries = ['Germany', 'China', 'Brazil', 'Canada', 'USA'];
        const selectedYear = 2021;
    
        const filtered = data.filter(row => 
          row.Year === selectedYear && selectedCountries.includes(row.Entity)
        );
    
        new Chart(ctx8, {
          type: 'doughnut',
          data: {
            labels: filtered.map(row => row.Entity),
            datasets: [{
              label: 'Solar (% electricity) in 2021',
              data: filtered.map(row => row['Solar (% electricity)']),
              backgroundColor: [
                '#ffeb3b', '#ff7043', '#81d4fa', '#9575cd', '#66bb6a'
              ]
            }]
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Share of Solar in Electricity (2021)',
                font: {
                  family: 'Inter',
                  size: 20,
                  weight: 'medium'
                }
              },
              legend: {
                labels: {
                  font: {
                    family: 'Inter',
                    size: 14
                  }
                }
              }
            },
            maintainAspectRatio: false
          }
        });
      });

      const ctx9 = document.getElementById('myChart9');

      fetch('../data/json/share-electricity-hydro.json')
        .then(response => response.ok && response.json())
        .then(data => {
          const selectedCountries = ['Germany', 'China', 'Brazil', 'Canada', 'USA'];
          const selectedYear = 2021;
      
          const filtered = data.filter(row => 
            row.Year === selectedYear && selectedCountries.includes(row.Entity)
          );
      
          new Chart(ctx9, {
            type: 'doughnut',
            data: {
              labels: filtered.map(row => row.Entity),
              datasets: [{
                label: 'Hydro (% electricity) in 2021',
                data: filtered.map(row => row['Hydro (% electricity)']),
                backgroundColor: [
                  '#64b5f6', '#4db6ac', '#fbc02d', '#e57373', '#7986cb'
                ]
              }]
            },
            options: {
              plugins: {
                title: {
                  display: true,
                  text: 'Share of Hydro in Electricity (2021)',
                  font: {
                    family: 'Inter',
                    size: 20,
                    weight: 'medium'
                  }
                },
                legend: {
                  labels: {
                    font: {
                      family: 'Inter',
                      size: 14
                    }
                  }
                }
              },
              maintainAspectRatio: false
            }
          });
        });


  const ctx11 = document.getElementById('myChart11');

  fetch('../data/json/cumulative-installed-wind-energy-capacity-gigawatts.json')
          .then(response => response.ok && response.json())
          .then(data => {
            const selectedCountry = 'Brazil';
            const selectedYears = [2017, 2018, 2019, 2020, 2021];
        
            const filtered = data.filter(row =>
              row.Entity === selectedCountry && selectedYears.includes(row.Year)
            );
        
            new Chart(ctx11, {
              type: 'line',
              data: {
                labels: filtered.map(row => row.Year),
                datasets: [{
                  label: 'Wind Capacity (GW)',
                  data: filtered.map(row => row['Wind Capacity']),
                  borderColor: 'rgba(66, 165, 245, 1)',
                  backgroundColor: 'rgba(66, 165, 245, 0.2)',
                  tension: 0.3,
                  fill: true,
                  pointRadius: 5
                }]
              },
              options: {
                plugins: {
                  title: {
                    display: true,
                    text: 'Installed Wind Energy Capacity in Brazil (GW)',
                    font: {
                      family: 'Inter',
                      size: 20,
                      weight: 'medium'
                    }
                  },
                  legend: {
                    labels: {
                      font: {
                        family: 'Inter',
                        size: 14
                      }
                    }
                  }
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Year'
                    },
                    ticks: {
                      font: {
                        family: 'Inter'
                      }
                    }
                  },
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Capacity (GW)'
                    },
                    ticks: {
                      font: {
                        family: 'Inter'
                      }
                    }
                  }
                },
                maintainAspectRatio: false
              }
            });
  });

  const ctx12 = document.getElementById('myChart12');

  fetch('../data/json/installed-solar-PV-capacity.json')
    .then(response => response.ok && response.json())
    .then(data => {
      const selectedCountry = 'Brazil';
      const selectedYears = [2017, 2018, 2019, 2020, 2021];
  
      const filtered = data.filter(row =>
        row.Entity === selectedCountry && selectedYears.includes(row.Year)
      );
  
      new Chart(ctx12, {
        type: 'line',
        data: {
          labels: filtered.map(row => row.Year),
          datasets: [{
            label: 'Solar PV Capacity (GW)',
            data: filtered.map(row => row['Solar Capacity']),
            borderColor: 'rgba(255, 152, 0, 1)',
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            tension: 0.3,
            fill: true,
            pointRadius: 5
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Installed Solar PV Capacity in Brazil (GW)',
              font: {
                family: 'Inter',
                size: 20,
                weight: 'medium'
              }
            },
            legend: {
              labels: {
                font: {
                  family: 'Inter',
                  size: 14
                }
              }
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year'
              },
              ticks: {
                font: {
                  family: 'Inter'
                }
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Capacity (GW)'
              },
              ticks: {
                font: {
                  family: 'Inter'
                }
              }
            }
          },
          maintainAspectRatio: false
        }
      });
    });

    const ctx13 = document.getElementById('myChart13');

    fetch('../data/json/modern-renewable-energy-consumption.json')
      .then(response => response.ok && response.json())
      .then(data => {
        const selectedCountry = 'Colombia';
        const selectedYear = 2021;
    
        const row = data.find(d => d.Entity === selectedCountry && d.Year === selectedYear);
    
        const labels = ['Solar Generation - TWh', 'Wind Generation - TWh', 'Hydro Generation - TWh', 'Geo Biomass Other - TWh'];
        const values = labels.map(label => row[label]);
    
        new Chart(ctx13, {
          type: 'radar',
          data: {
            labels: ['Solar', 'Wind', 'Hydro', 'Geo/Biomass'],
            datasets: [{
              label: `Modern Renewable Energy Consumption in Colombia (${selectedYear})`,
              data: values,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            }]
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: `Renewable Energy by Source in Colombia (${selectedYear})`,
                font: {
                  family: 'Inter',
                  size: 20,
                  weight: 'medium'
                }
              },
              legend: {
                labels: {
                  font: {
                    family: 'Inter',
                    size: 14
                  }
                }
              }
            },
            scales: {
              r: {
                beginAtZero: true,
                pointLabels: {
                  font: {
                    family: 'Inter',
                    size: 14
                  }
                },
                ticks: {
                  font: {
                    family: 'Inter'
                  }
                }
              }
            },
            maintainAspectRatio: false
          }
        });
      });
