FROM node:14-alpine

RUN apk add --no-cache git

# Quasar
RUN npm install -g @quasar/cli

# Firebase Emulator
RUN npm install -g firebase-tools
RUN apk add --no-cache openjdk11

# Utils
RUN npm install -g npm-check-updates
