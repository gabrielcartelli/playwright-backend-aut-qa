# Automação - Projeto Base Playwright Backend
Projeto de automação de testes de backend com Playwright

## Instalação

1. Instale o Node:
- [Node (^20.11.0)](https://nodejs.org/en)

2. Instale as dependências do projeto:
```bash
  npm install
```
    
## Estrutura

```
│  ├── tests/
│  │   ├── *.spec.js
│  ├── support/
│  │   ├── services/
│  │   ├── tools/
├── .gitignore
├── playwright.config.js
└── README.md
```

## Execução
Na raiz do projeto, execute:
```bash
  npx playwright test --grep @smoke
```
- No fim do comando são passadas as tags dos cenários que devem ser executados (ex.: @smoke). Para passar mais de uma tag, utilize o seguinte formato: "@smoke|@regressao".
- É possível passar parâmetros na execução adicionando ele no início do comando:
```bash
  ENV=dev npx playwright test --grep @smoke
```
