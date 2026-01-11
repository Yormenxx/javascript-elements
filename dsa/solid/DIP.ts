// "Depende de abstracciones, no de implementaciones concretas."

// Mal: Que tu servicio dependa directamente de Axios o Fetch.


interface DataService {
  fetchData(): Promise<any>;
}


class ApiService implements DataService {
  async fetchData() { 
    return "Datos de la API"; 
  }
}


class UserDashboard {
 
  constructor(private service: DataService) {}

  render() {
    this.service.fetchData().then(console.log);
  }
}


const dashboard = new UserDashboard(new ApiService());
























