# Orientações

Instalar node (apenas 1x)
Instalar yarn (apenas 1x)

yarn init -y            *inicia o yarn*
yarn add typescript -D  *adiciona o typescript como dependencia*
yarn tsc --init         *cria o tsconfig*

Alterar tstconfig.json
"target": "ES2020",
"outDir": "./dist",
"rootDir": "./scr", 

npx tsc
node .dist/main