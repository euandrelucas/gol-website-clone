FROM node:20

# Define o diretório de trabalho
WORKDIR /usr/src/app

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install curl gnupg -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Copia apenas os arquivos necessários para instalar as dependências
COPY package*.json ./
COPY yarn.lock ./

# Instala dependências
RUN yarn install

# Copia o restante dos arquivos
COPY . .

# Executa verificações e build
RUN yarn lint && yarn build

# Exponha a porta usada pelo aplicativo
EXPOSE 2458

# Comando para iniciar o servidor em produção
CMD ["yarn", "start"]