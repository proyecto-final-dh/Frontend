#FROM node:16.14.2-alpine as builder
##WORKDIR /app
###COPY . .
#RUN npm install
#RUN npm run build

# nginx state for serving content
#FROM nginx:alpine
# Remove default nginx static assets
#RUN rm -rf /usr/share/nginx/html/*
# Remove default nginx conf

# Copy static assets from builder stage
#RUN ls
#COPY --from=builder /app/build /usr/share/nginx/html
#COPY --from=builder /app/nginx.conf /etc/nginx/conf.d

# Dockerfile
 
# Use an existing node alpine image as a base image.
FROM node:18-alpine
 
# Set the working directory.
WORKDIR /app
 
# Copy the package.json file.
COPY package.json .
 
# Install application dependencies.
RUN npm install
 
# Copy the rest of the application files.
COPY . .
 
# Expose the port.
EXPOSE 80
 
# Run the application.
CMD [“npm”, “start”]