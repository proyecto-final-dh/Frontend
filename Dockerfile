FROM node:16.14.2-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# Set environment variables
# install node modules and build assets
RUN npm ci 
RUN npm run build

# nginx state for serving content
FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Remove default nginx conf
RUN rm /etc/nginx/conf.d/default.conf
# Copy static assets from builder stage
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
