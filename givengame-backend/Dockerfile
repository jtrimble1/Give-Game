FROM node:latest

WORKDIR /givengame-backend

# COPY . /givengame-frontend

COPY package*.json ./
RUN npm install

# RUN yarn install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]

