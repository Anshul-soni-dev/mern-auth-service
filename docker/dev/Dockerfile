FROM node:18

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5501

CMD ["npm", "run", "dev"]