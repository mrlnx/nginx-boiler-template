FROM node:11-alpine

WORKDIR /server

# ENV TOKEN_SECRET=supersecret
# ENV DB_USER=root
# ENV DB_NAME=mvw
# ENV DB_HOST=mvw_db
# ENV DB_PASSWORD=P@ssw0rd

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

EXPOSE 5000

CMD [ "node", "server.js" ]