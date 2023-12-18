# Dockerfile for Expo and React Native
FROM node:latest

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

# Expo CLI
RUN npm install -g expo-cli