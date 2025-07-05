# Dockerfile for Rui Yin UI Component Library
FROM node:20-alpine AS build

# Set working directory as required (lastName_firstName_ui_garden)
WORKDIR /yin_rui_ui_garden

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the production React app
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy build files to nginx
COPY --from=build /yin_rui_ui_garden/build /usr/share/nginx/html

# Expose port 8083 as required
EXPOSE 8083

# Configure nginx to run on port 8083
RUN sed -i 's/listen       80;/listen       8083;/' /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
