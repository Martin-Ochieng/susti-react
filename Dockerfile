# Stage 1: Build React app
FROM node:18 AS builder
WORKDIR /app

# Copy package.json & install deps
COPY package*.json ./
RUN npm install

# Copy all source files and build React
COPY . .
RUN npm run build

# Stage 2: Serve React + Express backend
FROM node:18
WORKDIR /app

# Copy backend files
COPY server.js config.js package*.json ./
COPY --from=builder /app/build ./build

# Install only production deps
RUN npm install --production

# Expose port Cloud Run expects
EXPOSE 8080

# Run the server
CMD ["node", "server.js"]
