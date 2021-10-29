/// <reference types="cypress"/>

describe('Cenário de teste: Testar funcionalidades do site do Detran MG.', () => {
    
    it('Caso de teste: Verificar resultado do exame de legislação', () => {
        cy.visit('https://www.detran.mg.gov.br');
        cy.get('.navbar-toggler').click();
        cy.get('.menu-icons-habilitacao > .nav-link').click();
        cy.get('.menu-icons-habilitacao > .dropdown-menu > .row > .col-lg-2.icon-posicao2 > :nth-child(5) > .btn-menu > .link-menu').click();   
        cy.get('.menu-list > :nth-child(4) > .btn-menu').click();
        cy.get('#cpf').type('01645571645');
        cy.get('#data-nascimento').type('14/05/2000');
        cy.get('.form-aguarde > .btn-primary').click();
    })

    it('Caso de teste: Verificar pontuação na carteira com CPF inválido', () => {
        cy.visit('https://www.detran.mg.gov.br');
        cy.get('.navbar-toggler').click();
        cy.get('.menu-icons-infracoes > .nav-link').click();
        cy.get('.menu-icons-infracoes > .dropdown-menu > .row > :nth-child(2) > :nth-child(2) > .btn-menu > .link-menu').click();
        cy.get('#cpf').type('00000000000');
        cy.get('#datanascimento').type('14/05/2000');
        cy.get('#dataprimeirahabilitacao').type('14/05/2020');
        cy.get('.form-aguarde > .btn-primary').click();
    })

    it('Caso de teste: Buscar clínicas AMEP credenciadas em Belo Horizonte', () => {
        cy.visit('https://www.detran.mg.gov.br');
        cy.get('.navbar-toggler').click();
        cy.get('.menu-icons-parceiros > .nav-link').click();
        cy.get('.menu-icons-parceiros > .dropdown-menu > .row > .col-lg-2.icon-posicao2 > :nth-child(2) > .btn-menu').click();
        cy.get('#nomeclinica').type('AMEP');
        cy.get('.form-aguarde > .btn-primary').click();
    })

    it('Caso de teste: Buscar unidades de atendimento em Pouso Alegre', () => {
        cy.visit('https://www.detran.mg.gov.br');
        cy.get('.navbar-toggler').click();
        cy.get('#unidade-atendimento').type('Pouso Alegre');
        cy.get('#btn-buscar-unidade > .svg-inline--fa').click();
    })

    it('Caso de teste: Buscar por certidão negativa de propriedade', () => {
        cy.visit('https://www.detran.mg.gov.br');
        cy.get('#q').type('certidão negativa');
        cy.get('#btn-buscar').click();
        cy.get('[href="/veiculos/certidoes-pesquisa/certidao-negativa-de-propriedade"] > .row > :nth-child(1) > .d-flex').click();
    })

    it('Caso de teste: Agendar exame de legislação', () => {
        cy.visit('https://www.detran.mg.gov.br');
        cy.get('.navbar-toggler').click();
        cy.get('.menu-icons-habilitacao > .nav-link').click();
        cy.get('.menu-icons-habilitacao > .dropdown-menu > .row > .col-lg-2.icon-posicao2 > :nth-child(5) > .btn-menu > .link-menu').click();
        cy.get('.menu-list > :nth-child(3) > .btn-menu').click();
        cy.get('#cpf').type('016.455.716-45');
        cy.get('#data-nascimento').type('14/05/2000');
        cy.get('.form-aguarde > .btn-primary').click();
    })  
})