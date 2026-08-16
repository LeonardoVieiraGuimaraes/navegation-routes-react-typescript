# Navegação e rotas em React com TypeScript

Estudo de roteamento em aplicações React usando React Router e TypeScript.

## Conteúdo

- Configuração do roteador e definição de rotas
- Rotas aninhadas e layout compartilhado
- Parâmetros de rota e query string, com tipagem
- Navegação programática
- Rotas protegidas por autenticação
- Página 404 e rota curinga

## Por que tipar as rotas importa

Rota é uma das poucas partes de uma aplicação React em que o dado chega **de fora** — da
URL. E o que vem da URL é sempre `string`.

Sem tipagem, `id` pode ser `undefined` e você só descobre quando a tela quebra. Com
TypeScript, o compilador força o tratamento antes de o código rodar.

É um caso pequeno, mas é exatamente onde a tipagem paga o custo dela.

## Como rodar

```bash
npm install
npm run dev
```

> ℹ️ O nome do repositório tem um erro de digitação: "navegation" deveria ser "navigation".
> Mantido para não quebrar links existentes.

---

## Autor

**Leonardo Vieira Guimarães** — desenvolvedor backend e Product Owner no IMA.
Mestre em Modelagem Computacional e Sistemas (UNIMONTES), doutorando em Modelagem
Matemática e Computacional (CEFET-MG).

[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-leoproti.com.br-0A0A0A?style=flat)](https://leoproti.com.br)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0000--3118--4664-A6CE39?style=flat&logo=orcid&logoColor=white)](https://orcid.org/0009-0000-3118-4664)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-perfil-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-vieira-guimaraes/)
