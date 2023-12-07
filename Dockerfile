FROM node:18 as builder
WORKDIR /app
COPY package.json .
RUN npm ci
COPY . .
RUN npm build


FROM nginx
EXPOSE 80
COPY --from=builder /app/build usr/share/nginx/html