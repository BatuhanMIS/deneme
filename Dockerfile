FROM node:20-alpine
WORKDIR /app
COPY app.js .
COPY package.json .
CMD ["node", "app.js"]