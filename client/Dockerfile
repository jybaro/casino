FROM node:latest

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY ["package*.json", "/client/"]

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]