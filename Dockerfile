# Step 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# (Very important) Ensure nginx serves static files
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
