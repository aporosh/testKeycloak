FROM node:19.2-alpine as build
WORKDIR /app
COPY pal_frontend/package.json /app/package.json
RUN npm install
COPY pal_frontend/. .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]