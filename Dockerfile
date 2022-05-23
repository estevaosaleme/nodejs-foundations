FROM node:16.3.0-alpine
WORKDIR /usr/src/app
ENV PORT=3333
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "npm", "run", "dev" ]