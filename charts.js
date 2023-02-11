import { obtenerDatos } from './api.js';

obtenerDatos().then(data => {
  const datos = data.data;
  const hospitalizados = datos.outcomes.hospitalized.currently.value;
  const muertes = datos.outcomes.death.total.value;
  console.log(datos.outcomes.death.total.value)
  const enTerapia = data.inIcuCurrently;
  const recuperados = data.recovered;

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Hospitalizados', 'Muertes', 'En Terapia', 'Recuperados'],
          datasets: [{
              label: 'Número de casos',
              data: [hospitalizados, muertes, enTerapia, recuperados],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Crear tabla
  //const table = document.getElementById("data-table");
  //const row = table.insertRow();
  //const hospitalizadosCell = row.insertCell();
  //const muertesCell = row.insertCell();
  //const enTerapiaCell = row.insertCell();
  //const recuperadosCell = row.insertCell();
  //hospitalizadosCell.innerHTML = hospitalizados;
  //muertesCell.innerHTML = muertes;
  //enTerapiaCell.innerHTML = enTerapia;
  //recuperadosCell.innerHTML = recuperados;
});