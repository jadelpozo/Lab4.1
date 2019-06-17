FROM node:latest
RUN mkdir -p /usr/src/Lab5
WORKDIR /usr/src/Lab5
COPY package.json /usr/src/Lab5/
RUN npm install
COPY . /usr/src/Lab5
EXPOSE 3000
CMD [ "node", "app.js" ] 
