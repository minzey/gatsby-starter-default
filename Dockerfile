FROM node:15

ENV DEBIAN_FRONTEND=noninteractive \
    NPM_CONFIG_LOGLEVEL=info

COPY package.json /root/package.json

WORKDIR /root

RUN npm i && npm i -g nodemon && \
    npm install -g gatsby-cli

EXPOSE 5000