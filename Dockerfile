FROM node:18 as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# nginx state for serving content
FROM nginx:alpine
EXPOSE 80
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Remove default nginx conf
RUN rm /etc/nginx/conf.d/default.conf
# Copy static assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d