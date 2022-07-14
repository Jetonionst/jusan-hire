FROM node:alpine

RUN npm install -g serve

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY ./ ./

RUN npm i

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]