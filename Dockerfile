FROM node:16.14.2-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# nginx state for serving content
FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Remove default nginx conf

# Copy static assets from builder stage
RUN ls
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d