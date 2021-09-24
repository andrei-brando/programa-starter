import axios from 'axios';

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.football-data.org/v2',
      headers: {
        // 'X-Auth-Token': '131429bfad4a42f9a851a551bb18d029',
        'x-auth-token': '131429bfad4a42f9a851a551bb18d029',
      },
    });
  }

  async getTeams(competitionId) {
    const { data } = await this.axios(`/competitions/${competitionId}/teams`);

    return data;
  }
}

export default Api;
