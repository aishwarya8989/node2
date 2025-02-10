FROM node:21.7.3

WORKDIR /app

COPY . .

RUN npm i

# CMD ["node","--watch","index.js"]
CMD ["nodemon","index.js"]
