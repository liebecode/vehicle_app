FROM node:lts-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY ./ /usr/src/app

RUN npm install

EXPOSE 5011

# You can change this
CMD [ "npm", "run", "dev" ]