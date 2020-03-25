# FROM node:11-alpine

# WORKDIR /client

# COPY package.json ./

# RUN npm install --silent

# EXPOSE 3000

# CMD [ "npm", "start" ]



# build environment
FROM node:alpine as builder
WORKDIR /client
COPY . ./
RUN npm install
#RUN npm run build

# production environment
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]