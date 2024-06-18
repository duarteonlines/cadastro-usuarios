FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

COPY .env ./

RUN npx prisma db push


EXPOSE 3000

CMD [ "npm", "start" ]