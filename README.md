# Aplicação DevOps

Aplicação Node.js + Express desenvolvida para a avaliação da disciplina de Ferramentas de Implantação Contínua (DevOps).

## Sobre o projeto

O projeto consiste em um servidor web simples que:
Serve uma página HTML de boas-vindas na rota principal;
Disponibiliza um endpoint que retorna, em formato JSON, os integrantes do grupo.

## Tecnologias utilizadas

Node.js
Express.js

## Como executar

1. Clone o repositório:
bash
   git clone https://github.com/kilppmath/aplicacao-devops.git
   cd aplicacao-devops
2. Instale as dependências:
bash
   npm install
3. Inicie o servidor:
bash
   node src/index.js4. Acesse no navegador: http://localhost:3000

## Endpoints

| Rota | Método | Descrição |
|---|---|---|
| / | GET | Retorna a página de boas-vindas |
| /integrantes | GET | Retorna um JSON com os integrantes do grupo |

## Integrantes

Matheus Kilpp Nogueira
Pedro Henrique Barbosa
Paulo Antonio Barbosa