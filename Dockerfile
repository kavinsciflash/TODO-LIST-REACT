FROM node:latest as build

# build app
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# serve to nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /src/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off" ]

