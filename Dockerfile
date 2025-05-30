# 1. Use official Node.js image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package dependencies 
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 4. Copy rest of the app
COPY . .

# 5. Expose development port
EXPOSE 3000

# 6. Run dev server
CMD ["npm", "run", "dev"]
