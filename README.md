# Configuração do Projeto

## Clonando o Repositório
sh
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Acesse a pasta do projeto
cd <NOME_DO_PROJETO>


## Abrindo no VS Code
sh
code .


---

## Configuração do Backend

1. Crie uma database no pgAdmin.
2. Importe o SQL do arquivo db.sql.
3. Execute o código Postgres.
4. Renomeie o arquivo .env.example para .env.
5. Preencha o arquivo .env com as informações necessárias.
6. No terminal, navegue para a pasta back:

   sh
   cd back
   
7. Instale as dependências:

   sh
   npm i
   
8. Inicie o servidor:

   sh
   npm run dev
   

---

## Configuração do Frontend

1. Renomeie o arquivo .env.example para .env.
2. Preencha o arquivo .env com as informações necessárias.
3. No terminal, navegue para a pasta front:

   sh
   cd front
   
4. Instale as dependências:

   sh
   npm i
   
5. Inicie o frontend:

   sh
   npm run dev
