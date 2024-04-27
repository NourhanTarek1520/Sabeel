# Use official Node image for building React
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

# Use lighter Node image for production (optional)
FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm run build  # Assuming you have a build script in your React project

EXPOSE 3000
CMD [ "npm", "start" ]
