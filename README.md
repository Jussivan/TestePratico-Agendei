# Configuração do Projeto

## Pré-requisitos
- Git
- Node.js
- npm
- PostgreSQL
- VS Code (opcional)

## Clonando o Repositório

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Acesse a pasta do projeto
cd <NOME_DO_PROJETO>

# Abra no VS Code (opcional)
code .
```

## Configuração do Backend

### Preparação do Banco de Dados
1. Crie um novo banco de dados no pgAdmin
2. Importe o script SQL do arquivo `db.sql`

### Configuração do Ambiente
1. Renomeie o arquivo `.env.example` para `.env`
2. Preencha o arquivo `.env` com as informações de conexão do banco de dados e outras configurações necessárias

### Instalação e Execução
```bash
# Navegue para a pasta do backend
cd back

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Configuração do Frontend

### Configuração do Ambiente
1. Renomeie o arquivo `.env.example` para `.env`
2. Preencha o arquivo `.env` com as configurações necessárias (URLs de API, chaves, etc.)

### Instalação e Execução
```bash
# Navegue para a pasta do frontend
cd front

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Solução de Problemas
- Verifique se todas as dependências estão instaladas
- Confirme que as configurações no `.env` estão corretas
- Verifique as versões do Node.js e npm

## Contato
Em caso de dúvidas, entre em contato comigo pelo [Meu LinkedIn](https://www.example.com](https://www.linkedin.com/in/jussivan-bezerra-matos-49254228b/)
