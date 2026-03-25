FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose port 3000 for development server
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]
