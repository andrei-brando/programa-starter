import axios from 'axios';

export class FixerHelper {
  constructor() {
    // this.apiKey = 'acd13b0df1795a9f17af52280bd02950';
    this.axios = axios.create({
      baseURL:
        'http://data.fixer.io/api/latest?access_key=acd13b0df1795a9f17af52280bd02950',
    });
  }

  async getRates() {
    const { data } = await this.axios();

    return data;
  }
}
