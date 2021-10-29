# 💻 S206-testes-UI
Repositório para Testes de UI no site detran.mg.gov.br com Cypress para a disciplina de Qualidade de Software

# 🔨 Como rodar o programa
  • Abrir o GIT Bash na pasta `cypress/integration/testes_ui`
  
  • Executar o comando `./node_modules/.bin/cypress open`
  
  • Clicar no código `testes_ui/detran.spec.js`
  
# 📜 Como gerar o relatório
  • No terminal (utilizei no VS Code), utilizar o comando `./node_modules/.bin/cypress run --spec 'cypress/integration/testes_ui/**/' `
  
  • Usar o comando `npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator`. Obs: o arquivo `cypress.json` já está configurado.
  
  • Utilizar novamente o comando `./node_modules/.bin/cypress run --spec 'cypress/integration/testes_ui/**/' ` para gerar o relatório.
  
  • Utilizar o comando `npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json` para realizar o merge.
  
  • Gerar um html com o comando `npx marge mochawesome.json`.
