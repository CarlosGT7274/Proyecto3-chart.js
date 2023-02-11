export async function obtenerDatos() {
    try {
      const response = await fetch('https://api.covidtracking.com/v2/us/daily/2021-01-02.json');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
