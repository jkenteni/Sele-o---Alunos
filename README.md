# Sistema de Seleção de Alunos - EEEP Padre João Bosco de Lima

## Descrição
Este é um sistema para automatizar o processo de seleção de alunos da Escola Profissionalizante Padre João Bosco de Lima. O sistema avalia os candidatos com base na média das notas do 6º ao 9º ano, levando em conta cotas de ingresso e a escolha de curso.

## Tecnologias Utilizadas
- **Front-end**: React.js
- **Back-end**: Node.js (Express)
- **Autenticação**: JWT (JSON Web Token)
- **Banco de Dados**: MySQL
- **Geração de PDF**: jsPDF

## Funcionalidades
- **Cadastro de Alunos**: Nome, data de nascimento, CPF (UUID), notas do 6º ao 9º ano, cota de ingresso e curso desejado.
- **Cálculo de Média**: Média baseada nas disciplinas do ensino fundamental.
- **Classificação Automática**: Ordena os alunos de acordo com suas notas.
- **Geração de JSON e PDF**: Exporta a lista de alunos classificados e a lista de espera.
- **Login e Autenticação**: Para acessos administrativos.

## Estrutura do Banco de Dados
O banco de dados contém as seguintes tabelas:
- **alunos**: Contém informações do aluno e sua classificação.
- **cotas**: Lista os tipos de cotas disponíveis.
- **cursos**: Lista os cursos oferecidos.
- **notas**: Registra as notas do aluno por disciplina e ano letivo.

## Instalação e Execução
### **1. Clonar o Repositório**
```bash
git clone https://github.com/jkenteni/selecao-alunos.git
cd selecao-alunos
```
### **2. Configurar o Back-end**
```bash
cd backend
npm install
npm start
```
### **3. Configurar o Front-end**
```bash
cd ../frontend
npm install
npm start
```

## 📜 Licença & Afins

Este projeto é licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-BETA-red)


### By: @jkenteni