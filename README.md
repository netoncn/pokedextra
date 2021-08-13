# Pokédex

Conforme conversamos, gostamos do nosso bate papo, e para prosseguirmos com o processo, segue abaixo o teste técnico para avaliarmos melhor a qualidade do seu código e seu raciocínio lógico.  Queremos que você desenvolva um catálogo de pokémons que tenha suporte para adicionar e excluir novos pokémons a Pokédex, e, para isso será necessário que você desenvolva o front-end desta aplicação e recomendamos o uso da API [Pokeapi V2](https://pokeapi.co/docs/v2). 

# Requisitos necessários:

### Filtro de busca do pokémon

* Pesquisa através do nome ou número do pokémon ✅

### Botão para adicionar (capturar) o novo pokémon na Pokédex

* A lista de sua Pokédex deve estar vazia a princípio. ✅

### Listagem dos pokémons adicionados a Pokédex

* Nome e imagem com limite de 10 pokémons por exibição, deverá conter uma paginação em grid de 10/10. ✅

### Detalhe do Pokémon

Botão ou mecanismo similar para abertura de uma nova página com detalhes do quadrinho. ✅

A página de detalhe deve conter
*  Nome ✅
* Imagem ✅
* Tamanho ✅
* Lista de tipos ✅
* Velocidade ✅
* Defesa ✅
* Ataque ✅
* Hp ✅
* Passos da evolução ✅


## Botão para excluir o pokémon

* Opção para excluir o pokémon que foi adicionado na Pokédex ✅

## Extras

* Boas práticas de codificação ✅
* Cobertura de testes ❌ (Cobertura de testes dos componentes baixa)
* Aplicação responsiva ✅
* Design similar ao de uma pokédex ✅ (Baseado na pokedex do Wikode)


O código deve estar em um repositório público. ✅

## Extras Pessoais

* Página de lista com request sendo feito com GraphQl ✅
* Lista de captura utilizando database do firebase ✅
* Autenticação utilizando firebase ✅
* Projeto hospedado no Netlify: https://pokedextra.netlify.app/

# React Create App Readme
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Firebase

Para funcionamento do código é necessário criar o projeto no Firebase, habilitar autenticação por email e realtime database.
Criar arquivo .env.local com as seguintes variaveis:

REACT_APP_API_KEY

REACT_APP_AUTH_DOMAIN

REACT_APP_DATABASE_URL

REACT_APP_PROJECT_ID

REACT_APP_STORAGE_BUCKET

REACT_APP_MESSAGING_SENDER_ID

REACT_APP_APP_ID
