FROM node:20 as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./angular.conf  /etc/nginx/conf.d/default.conf
