#FROM node-alpine based image
FROM node 
#WORKDIR user/src/app
COPY package*.json ./
RUN npm install --only=production

CMD npm start  