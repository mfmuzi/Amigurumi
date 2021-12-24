## Amigurumi e-commerce

​		Neste projeto foi desenvolvido um e-commerce para Amigurumis. O Back-end foi desenvolvido em Node.js e o Postgres foi escolhido como banco de dados. Já o Front-end, foi desenvolvido em Reat.

​		Com a aplicação é possível escolher os ítens para compra (Amigurumis) e no carrinho é possível fazer a adição ou a retirada de ítens. Na aba contatos, pode-se deixar mensagens, sendo essa a integração com o banco de dados.



## Conexão com o banco de dados

​		Para esse projeto foi utilizado o Postgres. Caso o tenha instalado, olhar as configurações no arquivo ormconfig.json presente na pasta BackEnd do projeto. Caso deseje a conexão via Docker, executar o comando na pasta backend:

```
docker run --name default -d -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=dio -e POSTGRES_DB=amigurumi postgres
```



## Para executar o projeto

- Clonar todo o repositório; 

- Com o banco de dados ativo:

  - Para rodar o Back-end: entrar na pasta backend e rodar o comando no console:

    ```
    npm start
    ```

    

  - Para rodar o Fron-end: entrar na pasta shopping e executar o comando no console:

    ```
    npm start
    ```





## Tecnologias

As seguintes ferramentas estão sendo usadas na construção do projeto:

- [React.js](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeOrm](https://typeorm.io/#/)
- [Vscode](https://code.visualstudio.com/)
- [Docker](https://docs.docker.com/)
