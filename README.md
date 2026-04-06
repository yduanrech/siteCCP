<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Centro de Cópias — Site Institucional

Site institucional do Centro de Cópias e Plotagem — Braço do Norte, SC.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- Conta no GitHub com o repositório configurado

## Rodando Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:3002`.

## Build de Produção

Para gerar os arquivos otimizados na pasta `dist/`:
```bash
npm run build
```

Para pré-visualizar o build localmente antes de publicar:
```bash
npm run preview
```

## Deploy no GitHub Pages

O projeto usa o pacote [`gh-pages`](https://github.com/tschaub/gh-pages) para publicar automaticamente na branch `gh-pages`.

### Configuração inicial (apenas uma vez)

1. Certifique-se de que o campo `homepage` no `package.json` está com a URL correta do seu domínio:
   ```json
   "homepage": "https://centrodecopias.net.br"
   ```

2. No repositório do GitHub, vá em **Settings → Pages** e configure:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`

3. Se usar domínio personalizado, adicione o arquivo `CNAME` na pasta `public/` com o domínio:
   ```
   centrodecopias.net.br
   ```
   E aponte o DNS do domínio para `<seu-usuario>.github.io`.

### Publicando

Execute o comando abaixo. Ele faz o build e publica automaticamente na branch `gh-pages`:
```bash
npm run deploy
```

> O comando `predeploy` roda `npm run build` automaticamente antes do deploy.
