const express = require('express');
const PDFDocument = require('pdfkit');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// botões em HTML
function generateButtons() {
  return `
    <div style="margin-top: 20px;">
      <a href="/" style="padding: 10px 20px; margin-right: 10px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Login</a>
      <a href="/cadastro" style="padding: 10px 20px; margin-right: 10px; background-color: #2196F3; color: white; text-decoration: none; border-radius: 5px;">Cadastro</a>
      <a href="/pesquisa/12345678900" style="padding: 10px 20px; margin-right: 10px; background-color: #f39c12; color: white; text-decoration: none; border-radius: 5px;">Pesquisar Aluno (CPF)</a>
      <a href="/gerar-relatorio/João" style="padding: 10px 20px; margin-right: 10px; background-color: #e74c3c; color: white; text-decoration: none; border-radius: 5px;">Gerar Relatório (João)</a>
    </div>
  `;
}

// Rota padrão
app.get('/', (req, res) => {
  res.send(`
    <h1>Página de Login</h1>
    <p>Bem-vindo ao sistema. Por favor, faça seu login.</p>
    ${generateButtons()}
  `);
});

// Rota de Cadastro
app.get('/cadastro', (req, res) => {
  res.send(`
    <h1>Página de Cadastro</h1>
    <p>Preencha os dados para se cadastrar.</p>
    ${generateButtons()}
  `);
});

//pesquisar CPF do aluno
app.get('/pesquisa/:cpf', (req, res) => {
  const cpf = req.params.cpf;
  // Simula a busca
  const aluno = {
    nome: "João da Silva",
    cpf: cpf,
    curso: "Informática",
    dataMatricula: "01/03/2023"
  };

  if (aluno) {
    res.send(`
      <h1>Pesquisa do Aluno</h1>
      <p>Aluno encontrado:</p>
      <ul>
        <li><strong>Nome:</strong> ${aluno.nome}</li>
        <li><strong>CPF:</strong> ${aluno.cpf}</li>
        <li><strong>Curso:</strong> ${aluno.curso}</li>
        <li><strong>Data de Matrícula:</strong> ${aluno.dataMatricula}</li>
      </ul>
      ${generateButtons()}
    `);
  } else {
    res.status(404).send(`
      <h1>Aluno não encontrado</h1>
      <p>O aluno com o CPF ${cpf} não foi encontrado.</p>
      ${generateButtons()}
    `);
  }
});

//gerarPDF
app.get('/gerar-relatorio/:nome', (req, res) => {
  const nome = req.params.nome;

  // Simula a busca
  const aluno = {
    nome: nome,
    cpf: "12345678900",
    curso: "Informática",
    dataMatricula: "01/03/2023"
  };

  const doc = new PDFDocument();

  // Define o cabeçalhoPDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="relatorio.pdf"');

  // Inicia a criaçãoPDF
  doc.pipe(res);
  doc.fontSize(25).text(`Relatório - ${aluno.nome}`, { align: 'center' });
  doc.fontSize(12).text('Este é um relatório gerado pelo sistema', { align: 'center' });

  // Adiciona as informacoes do aluno no pdf
  doc.fontSize(12).text(`Nome: ${aluno.nome}`, { align: 'left' });
  doc.fontSize(12).text(`CPF: ${aluno.cpf}`, { align: 'left' });
  doc.fontSize(12).text(`Curso: ${aluno.curso}`, { align: 'left' });
  doc.fontSize(12).text(`Data de Matrícula: ${aluno.dataMatricula}`, { align: 'left' });

  doc.end();
});

// porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
