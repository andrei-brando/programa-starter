yarn init -y                 *inicia o yarn*

*OBS: no package.json não pode ter espaço, caracter especial ou caracteres maiúsculos no name*

yarn add typescript -D       *adiciona o typescript como dependencia*
yarn add express             *adiciona o express no projeto*
yarn add @types/express -D   *adicona o autocomplete para express*
yarn add @types/node -D      *adicona o autocomplete para node*
yarn add ts-node-dev -D      *instala usado apenas em desenvolvimento para rodar o build*

yarn tsc --init
mkdir src

no package.json
"scripts": {
     "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts" *isso vai rodar nosso arquivo index.ts e vai ficar sempre escutando e transpilando modificações*
  }