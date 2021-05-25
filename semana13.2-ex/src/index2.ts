// #1
function dobrarEm5Segundos(n: number) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(n * 2);
      }, 5000);    
   })
}

// dobrarEm5Segundos(5).then(r => console.log(r)).catch((e) => console.log(e));

// async function somaAsync(x:number): number {
//    let a, b, c: number;

//    return await 0;
// }

// // const varA = await somaAsync(5);

// #2
async function delay() {
   setTimeout(() => {}, 1000);
}

async function umPorSegundo() {
   await delay();
   console.log('1s');
   await delay();
   console.log('2s');
   await delay();
   console.log('3s');
}

// umPorSegundo();

import axios from 'axios';
async function getUserFromGitHub(user:string) {
   const response = await axios.get(`https://api.github.com/users/${user}`);

   if (!response) {
      console.log('Usuário não existe');
   }

   console.log(response.data);
}

// getUserFromGitHub('djunior97');
getUserFromGitHub('djuniordsadas97');