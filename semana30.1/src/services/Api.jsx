import axios from 'axios';

class Api {
  constructor() {
    // this.hash = 'a2110823d4049282bfbe666bd8e79fff';
    // this.ts = '1609890812920';
    // this.apiKey = '07f05d67192c439bf8203269fc153fdd';
    this.hash = '117152c14e56127cd020846ded730e3d';
    this.ts = '1631667846';
    this.apiKey = 'abdf70c2860336f956afd0bf0da5ecf0';
    this.limit = 100;
    this.axios = axios.create({
      baseURL: 'https://gateway.marvel.com/v1/public',
    });
  }

  async getCharacters(page = 1) {
    const response = await this.axios(
      `/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${
        this.hash
      }&limit=${this.limit}&offset=${this.limit * (page - 1)}`
    );

    return response.data;
  }

  async getCharactersById(id) {
    const response = await this.axios(
      `/characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    );

    return response.data;
  }
}

export default new Api();

/* 
  https://gateway.marvel.com/v1/public/
  characters?
  ts=1609890812920
  apikey=07f05d67192c439bf8203269fc153fdd
  hash=a2110823d4049282bfbe666bd8e79fff
*/
