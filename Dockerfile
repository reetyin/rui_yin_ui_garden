# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8083
CMD ["npm", "run", "storybook", "--", "-p", "8083"]
