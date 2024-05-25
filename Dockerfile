FROM node:latest as build

# build time environment variable
ARG REACT_APP_NODE_ENV
ARG REACT_APP_SERVER_BASE_URI

# set default defult values for environment variable
ENV REACT_APP_NODE_ENV = $REACT_APP_NODE_ENV
ENV REACT_APP_SERVER_BASE_URI = $REACT_APP_SERVER_BASE_URI

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
EXPOSE 3000
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

