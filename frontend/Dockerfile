# Stage 1: Build Angular app
FROM node:20 AS build

WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Build Angular project
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built Angular files (IMPORTANT FIX for Angular 17+)
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Expose web port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
