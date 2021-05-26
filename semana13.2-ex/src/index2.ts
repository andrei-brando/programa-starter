// #1
function dobrarEm5Segundos(n: number) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(n * 2);
      }, 5000);
   })
}

// dobrarEm5Segundos(5).then(r => console.log(r)).catch((e) => console.log(e));

// async function somaAsync(x: number): Promise<number> {
//    let a = await dobrarEm5Segundos(10);
//    let b = await dobrarEm5Segundos(20);
//    let c = await dobrarEm5Segundos(30);

//    return a + b + c + x;
//  }

// console.log(somaAsync(20));


// #2
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
   await delay()
   console.log('1s')
   await delay()
   console.log('2s');
   await delay()
   console.log('3s');
}

// umPorSegundo();

import axios from 'axios';

async function getUserFromGithub(user: string) {
   try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response.data);
   } catch (error) {
      console.log('Usuário não existe');
   }
}

// getUserFromGithub('djunior97');
// getUserFromGithub('djunioriqdivqv97');

class Github {
   static async getRepositories(repo: string) {
      try {
         const response = await axios.get(`https://api.github.com/repos/${repo}`);
         console.log(response.data);
      } catch (error) {
         console.log('Repositório não existe');
      }
   }
}
// Github.getRepositories('marcelo-growdev/scrapbook-es6');
// Github.getRepositories('marcelo-growdev/qdbqqbqwn');

const buscaUsuario = async (usuario: string) => {
   try {
      const response = await axios.get(`https://api.github.com/users/${usuario}`);
      console.log(response.data);
   } catch (error) {
      console.log('Usuário não existe');
   }
}

buscaUsuario('marcelo-growdev');