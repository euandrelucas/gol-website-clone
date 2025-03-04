FROM node:20

# Define um usuário e grupo não-root
RUN groupadd -g 1001 noyevel && \
    useradd -m -u 1001 -g noyevel noyevel

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Evita o download do Chromium pelo Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Instala Google Chrome Stable e fontes
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl gnupg && \
    curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

# Copia apenas os arquivos necessários para instalar as dependências
COPY package*.json ./
COPY yarn.lock ./

# Altera a permissão do diretório de trabalho
RUN chown -R noyevel:noyevel /usr/src/app

# Muda para o usuário não-root
USER noyevel

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia o restante dos arquivos
COPY --chown=noyevel:noyevel . .

# Executa verificações e build
RUN yarn lint && yarn build

# Exponha a porta usada pelo aplicativo
EXPOSE 4001

# Comando para iniciar o servidor em produção
CMD ["yarn", "start"]
