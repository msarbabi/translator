FROM node:14.5.0-alpine as base

WORKDIR /app

COPY . .

RUN npm install

RUN npm rebuild node-sass

RUN npm run build

FROM nginx:latest

COPY --from=base /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]